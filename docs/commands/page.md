# Create page

```shell
get create page:name
```

this command allows you to create modules, it is recommended for users who chose to use getx_pattern.

creates the view, controller and binding files, in addition to automatically adding the route.

You can create a module within another module.

```shell
get create page:name on module_name
```

When creating a new project now and use on to create a page the CLI will use children pages.
