const bind = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => ({
  get() {
    const bound = descriptor.value.bind(this);
    Object.defineProperty(this, propertyKey, {
      value: bound,
    });
    return bound;
  },
});
export default bind;
