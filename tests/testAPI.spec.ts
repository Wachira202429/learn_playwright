import {test, request,expect} from 'playwright/test';

test("Request",async ()=> {
    const httpContext = await request.newContext({
        extraHTTPHeaders:{
            "auth":""
        }
    });
    //http get request
    const httpResponse = await httpContext.get("https://reqres.in/api/users?page=2");
    console.log(`HTTP request GET response code :${httpResponse.status()} ${httpResponse.statusText()}`);
    
    console.log(httpResponse.status(), httpResponse.statusText());
    
    const body = (await httpResponse.body()).toString();
    console.log("body = ", body);

    const json = JSON.parse(body);
    console.log("json = ", json);
    console.log("email = ",json.data.email);
});

test("404",async ()=> {
    const httpContext = await request.newContext({
        extraHTTPHeaders:{
            "auth":""
        }
    });
    //http get request
    const httpResponse = await httpContext.get("https://reqres.in/api/users/23");

    console.log(httpResponse.status(), httpResponse.statusText());
    expect (httpResponse.status()).toEqual(404);

});

test("POST",async ()=> {
    const httpContext = await request.newContext({
        extraHTTPHeaders:{
            "auth":""
        }
    });
    //http get request
    const httpResponse = await httpContext.post("https://reqres.in/api/users",{
    data:{
        "name": "morpheus",
        "job": "leader"

        }
    });
    console.log(httpResponse.status(), httpResponse.statusText());


});
test("PUT",async ()=> {
    const httpContext = await request.newContext({
        extraHTTPHeaders:{
            "auth":""
        }
    });
    //http get request
    const httpResponse = await httpContext.put("https://reqres.in/api/users/2",{
    data:{
        "name": "morpheus",
        "job": "leader"

        }
    });
    console.log(httpResponse.status(), httpResponse.statusText());

});
test("DELETE",async ()=> {
    const httpContext = await request.newContext({
        extraHTTPHeaders:{
            "auth":""
        }
    });
    //http get request
    const httpResponse = await httpContext.delete("https://reqres.in/api/users/2",{
    data:{
        "name": "morpheus",
        "job": "leader"

        }
    });
    console.log(httpResponse.status(), httpResponse.statusText());

});


const scnearios =[
    {
        name:"get user",
        method:"GET",
        endpoint: "https://reqres.in/api/users/2",
        payload:{},
        statusCode:200

    },
    {
        name:"post user",
        method:"POST",
        endpoint: "https://reqres.in/api/users",
        payload:{
            name:"Nan",
            job:"Qa test"
        },
        statusCode:201

    },
    {
        name:"put user",
        method:"PUT",
        endpoint: "https://reqres.in/api/users/2",
        payload:{
            name:"Nan",
            job:"Qa test"
        },
        statusCode:200

    },
    {
        name:"delete user",
        method:"DELETE",
        endpoint: "https://reqres.in/api/users/2",
        payload:{},
        statusCode:204

    }
]
for (const scneario of scnearios){
    test(`Send API Request ${scneario.method} to ${scneario.name} should receive response code ${scneario.statusCode}`,async()=>{
        const httpContext = await request.newContext();
        const resp = await httpContext.fetch(scneario.endpoint,
            {
            method: scneario.method,
            data:scneario.payload
        });
        console.log(resp.status(),resp.statusText());
        expect(resp.status()).toEqual(scneario.statusCode);
    });
}