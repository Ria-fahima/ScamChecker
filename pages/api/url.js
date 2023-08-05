export default async function handler(req, res) {
  try{
    const { url } = req.query

    const httpsRegex = /^https:\/\//i;
    const isHttps = httpsRegex.test(url);

    // fetch page link using url parameter
    const response = await fetch(url)
    const html = await response.text()

    // extract page link from HTML using regular expression
    const match = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)
    const pageLink = match ? match[1] : null

    res.status(200).json({ pageLink })

    if(res.statusCode === 200 && isHttps){
        console.log("A valid page link and secure.")
    }else if(res.statusCode ===200 && !isHttps){
      console.log('A valid page but insecure!')
    }else{
      console.log('invalid status!')
    }
  }catch(error){
    console.error(`Error is : ${error.message}`)
    return res.status(400).json({msg: 'Bad request!'})
    
  }
  
}