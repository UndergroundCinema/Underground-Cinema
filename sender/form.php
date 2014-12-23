<?php //include('./index.php'); ?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
    <script src="js/jquery.1.9.0.min.js"></script>
	<script src="http://api-maps.yandex.ru/2.0-stable/?load=package.standard&amp;lang=ru-RU" type="text/javascript"></script>
    <script src="js/jquery.maskedinput.min.js"></script>
	<script src="js/jquery.cookie.js"></script>
	<script src="js/jcarousellite_1.0.1.min.js"></script>
    <script src="js/main.js"></script>
    <script type="text/javascript">
        //ya.city
        ymaps.ready(init);
        function init() {
            var geolocation = ymaps.geolocation;
            $('#yacity').val(geolocation.city);
            //alert(geolocation.city);
        }
    </script>

</head>

<body>
<div class="overlay"></div>
<div id="modal-form" class="modal-form">
	<div class="form-block">
		<h3><span>Оставьте заявку</span>на тестовое письмо.</h3>
		<form class="sform" action="sender.php" method="post">
			<label><input type="text" class="name" name="name" placeholder="Введите имя"></label>
			<label><input type="text" class="phone" name="phone" placeholder="Введите телефон"></label>
            <label><input type="text" id="yacity" name="yacity" placeholder="Введите город"></label>
			<label><button class="btn-mform" type="submit" name="act" value="sender">Получить</button></label>
		</form>
	</div>
</div>

</body>
</html>