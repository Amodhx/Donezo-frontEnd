import axios from 'axios'

class ApiCall{
    baseUrl: string = "http://localhost:3000/api/v1"


    api = axios.create({
        baseURL : this.baseUrl
    })

    // eslint-disable-next-line
    async postApiCallWithFromData(url: string, data: any){
        try {
            return await this.api.post(url, data)
        }catch (err){
            return err;
        }
    }
    async patchApiCallWithFormData(url:string,data:FormData){
        try {
            return await this.api.patch(url, data)
        }catch (err){
            return err;
        }
    }
    // eslint-disable-next-line
    async postApiCall(url:string,data:any){
        try {
            return await this.api.post(url, data);
        }catch (err){
            console.error("Failed to save", err);
            return err;
        }
    }
    // eslint-disable-next-line
    async patchApiCall(url:string,data:any){
        try {
            return await this.api.patch(url, data)
        }catch (err){
            return err;
        }
    }
    async deleteApiCall(url:string,id:string){
        try {
            return await this.api.delete(url,{
                params:{
                    id : id
                }
            })
        }catch (err){
            return err;
        }
    }
    async getApiCall(url:string){
        try {
            return await this.api.get(url);
        }catch (err){
            return err;
        }
    }
}
const Api_call = new ApiCall();
export default Api_call;
