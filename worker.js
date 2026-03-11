// push 03/10/2026 17:28:34
export default {
  async fetch(){
    return new Response("integration-tests", {
      headers: {"content-type":"text/plain"}
    })
  }
}
