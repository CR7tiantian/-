
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="UTF-8">
</head>
<style>
    #time {
        color: red;
        border: solid 2px blue;
        height: 30px;
        width: 150px;
        font-size: 14px;
    };
    input.buttons {
        width: 620px;
        height:25px;
    }

</style>
<body>
<div style="margin:20px 10px">
    <input type="text" id="time" value="0:0:0:00">
</div>
<div style="margin:20px 10px">
    <input id="start" type="button" class="buttons" value="开始">
    <input id="pause" type="button" class="buttons" value="暂停">
    <input id="reset" type="button" class="buttons" value="重置">
</div>
<script type="text/javascript" src="js文件/计时器.js"></script>
</body>
</html>
