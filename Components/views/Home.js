import getWeather from "../../lib/getWeather";

export default st => {
  console.log(st);
  console.log(st.weather.temp);
  if (st.weather.temp == "") {
    setTimeout(() => {
      console.log("ran again");
    }, 2000);
    return `<p>loading...</p>`;
  }

  return `
<section>
  <div class="home">
<div>
<p>${st.weather.temp}see</p>
</div>
<img class"textwraphome" src="https://assets.classy.org/5384511/808bd476-2fcf-11e9-944b-0a2328a86bcc.jpg" alt="NDS">


  <p>Hello! Welcome to Special Bodies. This is a community that best fits parents who have kids or relatives with special needs. It is extremely important that we all make sure that people with special needs be treated fairly and have the same opportunities as everyone else. Over time I have realized that it is extremely difficult for people with special needs to feel like they are normal. The reason for that is because there are very few events that they are able to attend. This website is a platform to make sure that parents have the resources to find the locations and areas in which they can attend. In addition to that make sure to provide things at home that they can do in order to make sure they stay active and eat correctly. </p>
</div>
</section>

`;
};
