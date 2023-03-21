# Named Routes

If you prefer to navigate by namedRoutes, Get also supports this.

To navigate to nextScreen

```dart
Get.toNamed("/NextScreen");
```

To navigate and remove the previous screen from the tree.

```dart
Get.offNamed("/NextScreen");
```

To navigate and remove all previous screens from the tree.

```dart
Get.offAllNamed("/NextScreen");
```

To define routes, use GetMaterialApp:

```dart
void main() {
  runApp(
    GetMaterialApp(
      initialRoute: '/',
      getPages: [
        GetPage(name: '/', page: () => MyHomePage()),
        GetPage(name: '/second', page: () => Second()),
        GetPage(
          name: '/third',
          page: () => Third(),
          transition: Transition.zoom  
        ),
      ],
    )
  );
}
```

To handle navigation to non-defined routes (404 error), you can define an unknownRoute page in GetMaterialApp.

```dart
void main() {
  runApp(
    GetMaterialApp(
      unknownRoute: GetPage(name: '/notfound', page: () => UnknownRoutePage()),
      initialRoute: '/',
      getPages: [
        GetPage(name: '/', page: () => MyHomePage()),
        GetPage(name: '/second', page: () => Second()),
      ],
    )
  );
}
```

## Send data to named Routes

Just send what you want for arguments. Get accepts anything here, whether it is a String, a Map, a List, or even a class instance.

```dart
Get.toNamed("/NextScreen", arguments: 'Get is the best');
```

on your class or controller:

```dart
print(Get.arguments);
//print out: Get is the best
```

## Dynamic urls links

Get offer advanced dynamic urls just like on the Web. Web developers have probably already wanted this feature on Flutter, and most likely have seen a package promise this feature and deliver a totally different syntax than a URL would have on web, but Get also solves that.

```dart
Get.offAllNamed("/NextScreen?device=phone&id=354&name=Enzo");
```

on your controller/bloc/stateful/stateless class:

```dart
print(Get.parameters['id']);
// out: 354
print(Get.parameters['name']);
// out: Enzo
```

You can also receive NamedParameters with Get easily:

```dart
void main() {
  runApp(
    GetMaterialApp(
      initialRoute: '/',
      getPages: [
      GetPage(
        name: '/',
        page: () => MyHomePage(),
      ),
      GetPage(
        name: '/profile/',
        page: () => MyProfile(),
      ),
       //You can define a different page for routes with arguments, and another without arguments, but for that you must use the slash '/' on the route that will not receive arguments as above.
       GetPage(
        name: '/profile/:user',
        page: () => UserProfile(),
      ),
      GetPage(
        name: '/third',
        page: () => Third(),
        transition: Transition.cupertino  
      ),
     ],
    )
  );
}
```

Send data on route name

```dart
Get.toNamed("/profile/34954");
```

On second screen take the data by parameter

```dart
print(Get.parameters['user']);
// out: 34954
```

or send multiple parameters like this

```dart
Get.toNamed("/profile/34954?flag=true&country=italy");
```

or

```dart
var parameters = <String, String>{"flag": "true","country": "italy",};
Get.toNamed("/profile/34954", parameters: parameters);
```

On second screen take the data by parameters as usually

```dart
print(Get.parameters['user']);
print(Get.parameters['flag']);
print(Get.parameters['country']);
// out: 34954 true italy
```

And now, all you need to do is use Get.toNamed() to navigate your named routes, without any context (you can call your routes directly from your BLoC or Controller class), and when your app is compiled to the web, your routes will appear in the url <3

## Middleware

If you want to listen Get events to trigger actions, you can to use routingCallback to it

```dart
GetMaterialApp(
  routingCallback: (routing) {
    if(routing.current == '/second'){
      openAds();
    }
  }
)
```

If you are not using GetMaterialApp, you can use the manual API to attach Middleware observer.

```dart
void main() {
  runApp(
    MaterialApp(
      onGenerateRoute: Router.generateRoute,
      initialRoute: "/",
      navigatorKey: Get.key,
      navigatorObservers: [
        GetObserver(MiddleWare.observer), // HERE !!!
      ],
    ),
  );
}
```

Create a MiddleWare class

```dart
class MiddleWare {
  static observer(Routing routing) {
    /// You can listen in addition to the routes, the snackbars, dialogs and bottomsheets on each screen.
    ///If you need to enter any of these 3 events directly here,
    ///you must specify that the event is != Than you are trying to do.
    if (routing.current == '/second' && !routing.isSnackbar) {
      Get.snackbar("Hi", "You are on second route");
    } else if (routing.current =='/third'){
      print('last route called');
    }
  }
}
```

Now, use Get on your code:

```dart
class First extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.add),
          onPressed: () {
            Get.snackbar("hi", "i am a modern snackbar");
          },
        ),
        title: Text('First Route'),
      ),
      body: Center(
        child: ElevatedButton(
          child: Text('Open route'),
          onPressed: () {
            Get.toNamed("/second");
          },
        ),
      ),
    );
  }
}

class Second extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.add),
          onPressed: () {
            Get.snackbar("hi", "i am a modern snackbar");
          },
        ),
        title: Text('second Route'),
      ),
      body: Center(
        child: ElevatedButton(
          child: Text('Open route'),
          onPressed: () {
            Get.toNamed("/third");
          },
        ),
      ),
    );
  }
}

class Third extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Third Route"),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Get.back();
          },
          child: Text('Go back!'),
        ),
      ),
    );
  }
}
```
