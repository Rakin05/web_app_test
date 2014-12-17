var jq = jQuery;

jq("#zeigeBestellungen").click(function(){
	holeBestellungenUndZeigeAn();
	jq("#zeigeBestellungen").css({"visibility": "hidden"});
})

var holeBestellungenUndZeigeAn = function(){
	jq(document).ready(function(){

		jq.ajax({
			"url": "api/index.php?url=Bestellungen/alle",
			"success": function(daten){
				var bestellungen = JSON.parse(daten);

				bestellungen.forEach(function(bestellung){
					zeigeBestellungAn(bestellung);
				});
			}
		});
	});
}

var zeigeBestellungAn = function(bestellung){
	jq("body").append(
		"<div><p>" + bestellung.ID 
		+ "</p><p>" + bestellung.Vorname 
		+ "</p><p>"+ bestellung.Nachname 
		+ "</p></div>"
		);
}