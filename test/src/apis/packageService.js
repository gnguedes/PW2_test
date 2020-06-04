import API_URL from "./config.js"

export const packageService ={

    async getPackageServ(){
        const response = await fetch(`${API_URL}/packages`, {
            method: "GET",
            headers: {
                "x-api-key": "5c931630-48c4-45fc-9ea3-927cb9a2871f"
            }
        })
        if(response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async sendPackageServ(){
        const response = await fetch(`${API_URL}/packages`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            }
        })
        if(response.ok){
            return response.json()
        }else{
            throw Error(response)
        }
    }
}