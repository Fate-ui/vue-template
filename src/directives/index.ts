const modules = import.meta.glob('./*.ts');
export default (App: any) => {
  let moduleKeys = Object.keys(modules);
  if (moduleKeys.length) {
    moduleKeys.forEach(async (key) => {
      const module: any = await modules[key]();
      module.default(App);
    });
  }
};
