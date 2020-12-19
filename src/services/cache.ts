const provider = window.localStorage;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get(key: string, defaultValue: any = null): any {
    const cache = provider.getItem(key);
    if (cache === null) return defaultValue;
    const { data, expiresAt } = JSON.parse(cache) ?? { data: defaultValue };
    if (expiresAt - Date.now() <= 0) this.remove(key);
    return data;
  },
  set(key: string, data: any, ttl: number = 60000 * 60): void {
    provider.setItem(
      key,
      JSON.stringify({ data, expiresAt: Date.now() + ttl })
    );
  },
  remove(key: string) {
    provider.removeItem(key);
  },
};
