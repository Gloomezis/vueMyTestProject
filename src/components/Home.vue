<template>
<div class="row">
    <div id="carouselExampleIndicators" class="carousel slide col-md-5 col-md-offset-4" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="item active">
        <img class="d-block w-100" :src="carouselSource[0]" alt="First slide" >
        </div>
        <div class="item">
        <img class="d-block w-100" src="../assets/image(2).jpg" alt="Second slide" > 
        </div>
        <div class="item">
        <img class="d-block w-100" src="../assets/image(3).jpg" alt="Third slide" >
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="false">Previous</span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="false">Next</span>
        <span class="sr-only">Next</span>
    </a>
    </div>
</div>
</template>

<<script>
export default {
    name:'home',

    data(){
        return {
            carouselSource: [ 
                'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=369068&type=card',
                '../assets/image(2).jpg',
                '../assets/image(3).jpg',

            ]
        }
    }
}
</script>

<style scoped> 
.item img {
   
  width: 100%;
  height: auto
}

.carousel {
     
  position: relative;
  width: 300px;
  height: 500px;
}

ol.carousel-indicators {
  position: absolute;
  bottom: 0;
  margin: 0;
  left: 0;
  right: 0;
  width: auto;
}

ol.carousel-indicators li,
ol.carousel-indicators li.active {
  float: left;
  width: 33%;
  height: 10px;
  margin: 0;
  border-radius: 0;
  border: 0;
  background: transparent;
}

ol.carousel-indicators li.active {
  background: yellow;
}


</style>


