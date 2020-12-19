import cache from "./cache";

type Options = {
  cache?: {
    ttl: number;
  };
};

type Response = {
  valid: boolean;
  data: any;
};

export default async function fetchJson(
  url: string,
  options: Options = {}
): Promise<Response> {
  if (options.cache) {
    const data = cache.get(url);
    if (data !== null) return { valid: true, data };
  }
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (options.cache) cache.set(url, data, options.cache.ttl);
    return { valid: res.status < 300, data };
  } catch (err) {
    console.error(err);
    return { valid: false, data: null };
  }
}
