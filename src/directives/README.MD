举例：

```
const vAuth = (app: any) => {
  const lifeCycle = {
    mounted: (el: HTMLElement, binding: any) => {
      let value: any = binding.value;
      if (value) {
          el.remove();
      }
    },
  };
  app.directive('auth', lifeCycle);
};

export default vAuth;
```