const API_KEY = 'c752afec9b1508afb696211a5ce50f27'
const GetApiInfo = async (city) =>{
    const data = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ city || 'Buenos Aires'}&lang=sp,es&units=metric&appid=${API_KEY}`)).json();

    return(
        data 
    )
}
export default GetApiInfo;