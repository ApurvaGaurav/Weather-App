a = async function () {

    const url = `http://api.weatherapi.com/v1/current.json?key=6dae3b9666804e129c2114032231107&q=delhi&aqi=no`;
    // console.log(`showing data for ${cityname} PLZZ WAIT....`)
    const wdata = await fetch(url);
    const Wreport = await wdata.json();
    console.log(Wreport)
}
a();