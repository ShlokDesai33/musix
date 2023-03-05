import useSWR from 'swr'

export const fetcher = (body: any) => fetch(
  `/join-session`,
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
).then(res => res.json());

export default function joinSession(body: any) {
  const { data, isLoading } = useSWR(body, fetcher);
  return { data, isLoading };
}