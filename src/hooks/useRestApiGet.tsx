import {useCallback, useState} from "react";


export enum HttpMethod {
  GET = "GET",
  POST = "POST",
}

function methodHasBody(method: HttpMethod): boolean {
  return ![HttpMethod.GET].includes(method)
}

export default function useRestApi<T>(
    endpoint: string,
    httpVerb: HttpMethod,
    body: { [index: string]: any } | null = null,
) {
    const [response, setResponse] = useState<T>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getData = useCallback(async () => {
        setIsLoading(true);

        try {
            let res = await fetch("http://127.0.0.1:8080" + endpoint, {
                method: httpVerb.toString(),
                body: methodHasBody(httpVerb) ? JSON.stringify(body) : undefined,
            });
            let json = await res.json();
            setResponse(json);
            setIsLoading(false);

            return res
        } catch (err) {
            setIsLoading(false);
            throw err
        }

    }, [endpoint, httpVerb, body]);

    return {
        getData,
        isLoading,
        response,
    }

}
