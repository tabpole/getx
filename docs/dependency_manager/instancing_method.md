# Instancing methods

The methods and it's configurable parameters are:

## Get.put()

The most common way of inserting a dependency. Good for the controllers of your views for example.

```dart
Get.put<SomeClass>(SomeClass());
Get.put<LoginController>(LoginController(), permanent: true);
Get.put<ListItemController>(ListItemController, tag: "some unique string");
```

This is all options you can set when using put:

```dart
Get.put<S>(
  // mandatory: the class that you want to get to save, like a controller or anything
  // note: "S" means that it can be a class of any type
  S dependency

  // optional: this is for when you want multiple classess that are of the same type
  // since you normally get a class by using Get.find<Controller>(),
  // you need to use tag to tell which instance you need
  // must be unique string
  String tag,

  // optional: by default, get will dispose instances after they are not used anymore (example,
  // the controller of a view that is closed), but you might need that the instance
  // to be kept there throughout the entire app, like an instance of sharedPreferences or something
  // so you use this
  // defaults to false
  bool permanent = false,

  // optional: allows you after using an abstract class in a test, replace it with another one and follow the test.
  // defaults to false
  bool overrideAbstract = false,

  // optional: allows you to create the dependency using function instead of the dependency itself.
  // this one is not commonly used
  InstanceBuilderCallback<S> builder,
)
```

## Get.lazyPut

It is possible to lazyLoad a dependency so that it will be instantiated only when is used. Very useful for computational expensive classes or if you want to instantiate several classes in just one place (like in a Bindings class) and you know you will not gonna use that class at that time.

```dart
/// ApiMock will only be called when someone uses Get.find<ApiMock> for the first time
Get.lazyPut<ApiMock>(() => ApiMock());

Get.lazyPut<FirebaseAuth>(
  () {
    // ... some logic if needed
    return FirebaseAuth();
  },
  tag: Math.random().toString(),
  fenix: true
)

Get.lazyPut<Controller>( () => Controller() )
```

This is all options you can set when using lazyPut:

```dart
Get.lazyPut<S>(
  // mandatory: a method that will be executed when your class is called for the first time
  InstanceBuilderCallback builder,
  
  // optional: same as Get.put(), it is used for when you want multiple different instance of a same class
  // must be unique
  String tag,

  // optional: It is similar to "permanent", the difference is that the instance is discarded when
  // is not being used, but when it's use is needed again, Get will recreate the instance
  // just the same as "SmartManagement.keepFactory" in the bindings api
  // defaults to false
  bool fenix = false
  
)
```

## Get.putAsync

If you want to register an asynchronous instance, you can use `Get.putAsync`:

```dart
Get.putAsync<SharedPreferences>(() async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setInt('counter', 12345);
  return prefs;
});

Get.putAsync<YourAsyncClass>( () async => await YourAsyncClass() )
```

This is all options you can set when using putAsync:

```dart
Get.putAsync<S>(

  // mandatory: an async method that will be executed to instantiate your class
  AsyncInstanceBuilderCallback<S> builder,

  // optional: same as Get.put(), it is used for when you want multiple different instance of a same class
  // must be unique
  String tag,

  // optional: same as in Get.put(), used when you need to maintain that instance alive in the entire app
  // defaults to false
  bool permanent = false
)
```

## Get.create

```dart
Get.Create<SomeClass>(() => SomeClass());
Get.Create<LoginController>(() => LoginController());
```

This is all options you can set when using create:

```dart
Get.create<S>(
  // required: a function that returns a class that will be "fabricated" every
  // time `Get.find()` is called
  // Example: Get.create<YourClass>(() => YourClass())
  FcBuilderFunc<S> builder,

  // optional: just like Get.put(), but it is used when you need multiple instances
  // of a of a same class
  // Useful in case you have a list that each item need it's own controller
  // needs to be a unique string. Just change from tag to name
  String name,

  // optional: just like int`Get.put()`, it is for when you need to keep the
  // instance alive thoughout the entire app. The difference is in Get.create
  // permanent is true by default
  bool permanent = true
```

## Using instantiated methods/classes

Imagine that you have navigated through numerous routes, and you need a data that was left behind in your controller, you would need a state manager combined with the Provider or Get_it, correct? Not with Get. You just need to ask Get to "find" for your controller, you don't need any additional dependencies:

```dart
final controller = Get.find<Controller>();
// OR
Controller controller = Get.find();

// Yes, it looks like Magic, Get will find your controller, and will deliver it to you.
// You can have 1 million controllers instantiated, Get will always give you the right controller.
```

And then you will be able to recover your controller data that was obtained back there:

```dart
Text(controller.textFromApi);
```

Since the returned value is a normal class, you can do anything you want:

```dart
int count = Get.find<SharedPreferences>().getInt('counter');
print(count); // out: 12345
```

To remove an instance of Get:

```dart
Get.delete<Controller>(); //usually you don't need to do this because GetX already delete unused controllers
```

## Specifying an alternate instance

A currently inserted instance can be replaced with a similar or extended class instance by using the `replace` or `lazyReplace` method. This can then be retrieved by using the original class.

```dart
abstract class BaseClass {}
class ParentClass extends BaseClass {}

class ChildClass extends ParentClass {
  bool isChild = true;
}


Get.put<BaseClass>(ParentClass());

Get.replace<BaseClass>(ChildClass());

final instance = Get.find<BaseClass>();
print(instance is ChildClass); //true


class OtherClass extends BaseClass {}
Get.lazyReplace<BaseClass>(() => OtherClass());

final instance = Get.find<BaseClass>();
print(instance is ChildClass); // false
print(instance is OtherClass); //true
```

## Differences between methods

First, let's of the `fenix` of Get.lazyPut and the `permanent` of the other methods.

The fundamental difference between `permanent` and `fenix` is how you want to store your instances.

Reinforcing: by default, GetX deletes instances when they are not in use.
It means that: If screen 1 has controller 1 and screen 2 has controller 2 and you remove the first route from stack, (like if you use `Get.off()` or `Get.offNamed()`) the controller 1 lost its use so it will be erased.

But if you want to opt for using `permanent:true`, then the controller will not be lost in this transition - which is very useful for services that you want to keep alive throughout the entire application.

`fenix` in the other hand is for services that you don't worry in losing between screen changes, but when you need that service, you expect that it is alive. So basically, it will dispose the unused controller/service/class, but when you need it, it will "recreate from the ashes" a new instance.

Proceeding with the differences between methods:

- Get.put and Get.putAsync follows the same creation order, with the difference that the second uses an asynchronous method: those two methods creates and initializes the instance. That one is inserted directly in the memory, using the internal method `insert` with the parameters `permanent: false` and `isSingleton: true` (this isSingleton parameter only purpose is to tell if it is to use the dependency on `dependency` or if it is to use the dependency on `FcBuilderFunc`). After that, `Get.find()` is called that immediately initialize the instances that are on memory.

- Get.create: As the name implies, it will "create" your dependency! Similar to `Get.put()`, it also calls the internal method `insert` to instancing. But `permanent` became true and `isSingleton` became false (since we are "creating" our dependency, there is no way for it to be a singleton instace, that's why is false). And because it has `permanent: true`, we have by default the benefit of not losing it between screens! Also, `Get.find()` is not called immediately, it wait to be used in the screen to be called. It is created this way to make use of the parameter `permanent`, since then, worth noticing, `Get.create()` was made with the goal of create not shared instances, but don't get disposed, like for example a button in a listView, that you want a unique instance for that list - because of that, Get.create must be used together with GetWidget.

- Get.lazyPut: As the name implies, it is a lazy proccess. The instance is create, but it is not called to be used immediately, it remains waiting to be called. Contrary to the other methods, `insert` is not called here. Instead, the instance is inserted in another part of the memory, a part responsible to tell if the instance can be recreated or not, let's call it "factory". If we want to create something to be used later, it will not be mix with things been used right now. And here is where `fenix` magic enters: if you opt to leaving `fenix: false`, and your `smartManagement` are not `keepFactory`, then when using `Get.find` the instance will change the place in the memory from the "factory" to common instance memory area. Right after that, by default it is removed from the "factory". Now, if you opt for `fenix: true`, the instance continues to exist in this dedicated part, even going to the common area, to be called again in the future.
