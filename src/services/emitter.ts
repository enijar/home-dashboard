type Event = {
  id: number;
  event: string;
  fn: Function;
};

let nextId = 1;

const events: Event[] = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  listen(event: string, fn: Function): Function {
    const id = nextId++;
    events.push({ id, event, fn });
    return () => {
      const index: number = events.findIndex((item: Event) => item.id === id);
      if (index > -1) events.splice(index, 1);
    };
  },
  emit(event: string, data?: any) {
    events.forEach((item: Event) => {
      if (item.event === event) item.fn(data);
    });
  },
  off(event: string) {
    events.reverse().forEach((item: Event, index) => {
      if (item.event === event) events.splice(index, 1);
    });
  },
};
