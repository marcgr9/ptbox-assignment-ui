export enum HttpMethod {
  GET = "GET",
  POST = "POST",
}

function methodHasBody(method: HttpMethod): boolean {
  return ![HttpMethod.GET].includes(method)
}

export async function query<T>(
    endpoint: string,
    httpVerb: HttpMethod,
    body: { [index: string]: any } | null = null,
) {
    let res = await fetch(process.env.REACT_APP_BASE_REST_URL + endpoint, {
        method: httpVerb.toString(),
        headers: {
            'Content-Type': 'application/json'
        },
        body: methodHasBody(httpVerb) ? JSON.stringify(body) : undefined,
    });
    let json = await res.json();
    if (!res.ok) {
        throw {
            'body': json,
            'code': res.status
        }
    }

    return json as T
}
