canvas=document.getElementById('mycanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
nasa_mars_images_array=["mars2.jpg","mars3jpg","mars4jpg"];
random_number=Math.floor (Math.random()*3);
console.log(random_number);
background_img=nasa_mars_images_array[random_number];
console.log("background_img"+background_img)
rover_img="rover.png";
rover_x=10;
rover_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;
    rover_imgTag=new Image();
    rover_imgTag.onload=uplodrover;
    rover_imgTag.src=rover_img;

}
function uploadBackground (){
    ctx.drawImage(background_imgTag, 0 ,0, canvas.width,canvas.height);
} 

function uploadrover(){
    ctx,drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown, my_keydown")

function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log("keypressed");
    if(keypressed == '38')


{up();
    console.log("up");
}
if(keyPressed == '40')
{
    down();
    console.log("down");
}
if(keyPressed == '37')
{
    left();
    console.log("left");
}
if(keyPressed == '39')
{
    right();
    console.log("right");
}
}

function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
	

