<?php

require "Bestellungen.php";

class BestellungenController {

	public function alle () {
		$model = new Bestellungen();
		return $model->alleBestellungen();
	}

}