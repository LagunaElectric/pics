import axios from "axios"

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID LPkKS9sJA6gPBuqieuXCcHZUd0FZhkKB3fAM0XyUTL8"
  }
})
