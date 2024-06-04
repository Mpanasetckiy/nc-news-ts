interface RouteParams {
  path: string;
  params: string[];
}

export default function getRoute(
  { path, params }: RouteParams,
  ...args: string[]
): string {
  return params.reduce(
    (result, param, index) => result.replace(param, args[index]),
    path
  );
}
