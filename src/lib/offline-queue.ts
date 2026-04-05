type QueuedAction = {
  id: string;
  endpoint: string;
  payload: unknown;
  createdAt: string;
};

const STORAGE_KEY = "sportspot.queue";

function getQueue(): QueuedAction[] {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }

  try {
    return JSON.parse(raw) as QueuedAction[];
  } catch {
    return [];
  }
}

function setQueue(queue: QueuedAction[]) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(queue));
}

export function queueAction(endpoint: string, payload: unknown) {
  const queue = getQueue();
  queue.push({
    id: crypto.randomUUID(),
    endpoint,
    payload,
    createdAt: new Date().toISOString(),
  });
  setQueue(queue);
}

export async function flushQueuedActions() {
  const queue = getQueue();
  if (queue.length === 0) {
    return 0;
  }

  const remaining: QueuedAction[] = [];

  for (const action of queue) {
    try {
      const response = await fetch(action.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(action.payload),
      });

      if (!response.ok) {
        remaining.push(action);
      }
    } catch {
      remaining.push(action);
    }
  }

  setQueue(remaining);
  return queue.length - remaining.length;
}
