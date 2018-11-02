$(document).ready(function(){
	//console.log('entro');

	//estadias
	var estadia = [{
		"id": "0",
		"name": "Todas las estadías",
		"bestPrice": "26.119"
		},{
		"id": "1",
		"name": "Viajá por 7 días",
		"bestPrice": "26.119"
		},{
		"id": "2",
		"name": "Viajá por 10 días",
		"bestPrice": "32.413"
		},{
		"id": "3",
		"name": "Viajá por 15 días",
		"bestPrice": "40.000"
		},{
		"id": "4",
		"name": "Viajá por 19 días",
		"bestPrice": "50.000"
		},

		];

		//console.log(estadia);

		estadia.forEach( (item, index) => { 
			var estar = `
				<div class="estadia_desde_caja col-md-2 ml-lg-3" id="${item.id}">
					<p class="lead mt-2 mb-0 p_name">${item.name}</p>
					<p class="lead text-primary"><strong>desde $ ${item.bestPrice}</strong></p>
				</div>
			`;
			//console.log(estar);
			$('#id_estadia').append(estar);
		});

		//destinos 

		var destinos = [{
		"parentId": "1",
		"scales": "Directo",
		"price": "$ 26.119",
		"description": "7 días playa",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/cluster-new-york.jpg"
		},
		{
		"parentId": "1",
		"scales": "Directo",
		"price": "$ 30.000",
		"description": "7 días playa básico",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/cluster-new-york.jpg"
		},
		{
		"parentId": "1",
		"scales": "Directo",
		"price": "$ 40.000",
		"description": "7 días playa media pensión",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/cluster-new-york.jpg"
		},
		{
		"parentId": "1",
		"scales": "Directo",
		"price": "$ 50.000",
		"description": "7 días playa all inclusive",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/cluster-new-york.jpg"
		},
		{
		"parentId": "2",
		"scales": "Directo",
		"price": "$ 32.413",
		"description": "10 días shopping",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/cluster-orlando.jpg"
		},
		{
		"parentId": "2",
		"scales": "Directo",
		"price": "$ 40.000",
		"description": "10 días shopping básico",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/cluster-orlando.jpg"
		},
		{
		"parentId": "2",
		"scales": "Directo",
		"price": "$ 50.000",
		"description": "10 días shopping media pensión",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/cluster-orlando.jpg"
		},
		{
		"parentId": "2",
		"scales": "Directo",
		"price": "$ 60.000",
		"description": "10 días shopping all inclusive",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/cluster-orlando.jpg"
		},
		{
		"parentId": "3",
		"scales": "Directo",
		"price": "$ 40.000",
		"description": "15 días tour",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/cluster-cancun.jpg"
		},
		{
		"parentId": "3",
		"scales": "Directo",
		"price": "$ 45.000",
		"description": "15 días tour básico",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/cluster-cancun.jpg"
		},
		{
		"parentId": "3",
		"scales": "Directo",
		"price": "$ 50.000",
		"description": "15 días tour media pensión",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/cluster-cancun.jpg"
		},
		{
		"parentId": "3",
		"scales": "Directo",
		"price": "$ 55.000",
		"description": "15 días tour all inclusive",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/cluster-cancun.jpg"
		},
		{
		"parentId": "4",
		"scales": "Directo",
		"price": "$ 50.000",
		"description": "19 días full",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/img-cluster-punta-cana.jpg"
		},
		{
		"parentId": "4",
		"scales": "Directo",
		"price": "$ 55.000",
		"description": "19 días full básico",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/img-cluster-punta-cana.jpg"
		},
		{
		"parentId": "4",
		"scales": "Directo",
		"price": "$ 60.000",
		"description": "19 días full media pensión",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/img-cluster-punta-cana.jpg"
		},
		{
		"parentId": "4",
		"scales": "Directo",
		"price": "$ 65.000",
		"description": "19 días full all inclusive",
		"link": "https://www.avantrip.com",
		"img": "https://static.avantrip.com/fkt-flight/images/img-cluster-punta-cana.jpg"
		},

		];

	
	//console.log(destinos);
	destinos.forEach( (item, index) => {
			var mostrarDestino = `
				<div class="col-12 col-sm-6 col-lg-4 col-xl-3 ">
				<div class="card mt-3">
					<div class="card-body p-0">
						<a href="${item.link}" target="_blanck"><img src="${item.img}" width="100%" alt="promocion"></a>
					</div>
					<div class="card-footer">
						<div class="row">
							<div class="col-6 escala">
								<span class="d-inline-flex fas fa-plane-departure"></span><p class="dato d-inline-flex ml-2 mb-0 ">${item.scales}</p>
								<h4 class="descripcion mt-2 text-danger">${item.description}</h4>
							</div>
							<div class="col-6">
								<p class="text-right mb-0">Precio desde</p>
								<h4 class="text-right text-danger">${item.price}</h4>
							</div>
						</div>
						<div class="row">
							<div class="col-12 text-right">
								<a href="${item.link}" class="text-primary" target="_blanck">VER VUELO</a>
							</div>
						</div>
					</div>
				</div>
			</div>
				`;
			//console.log(mostrarDestino);
			$('#id_destinos').append(mostrarDestino);
	});

	$('#0').on('click', function(){
		$('#id_destinos').empty();
		destinos.forEach( (item, index) => {
			var mostrarDestino = `
				<div class="col-12 col-sm-6 col-lg-4 col-xl-3 ">
				<div class="card mt-3">
					<div class="card-body p-0">
						<a href="${item.link}" target="_blanck"><img src="${item.img}" width="100%" alt="promocion"></a>
					</div>
					<div class="card-footer">
						<div class="row">
							<div class="col-6 escala">
								<span class="d-inline-flex fas fa-plane-departure"></span><p class="dato d-inline-flex ml-2 mb-0 ">${item.scales}</p>
								<h4 class="descripcion mt-2 text-danger">${item.description}</h4>
							</div>
							<div class="col-6">
								<p class="text-right mb-0">Precio desde</p>
								<h4 class="text-right text-danger">${item.price}</h4>
							</div>
						</div>
						<div class="row">
							<div class="col-12 text-right">
								<a href="${item.link}" class="text-primary" target="_blanck">VER VUELO</a>
							</div>
						</div>
					</div>
				</div>
			</div>
				`;
			//console.log(mostrarDestino);
			$('#id_destinos').append(mostrarDestino);
	});

	});
	$('#1').on('click', function(){
		$('#id_destinos').empty();
		destinos.forEach( (item, index) => {
			if(item.parentId==1){
				var mostrarDestino = `
				<div class="col-12 col-sm-6 col-lg-4 col-xl-3 ">
				<div class="card mt-3">
					<div class="card-body p-0">
						<a href="${item.link}" target="_blanck"><img src="${item.img}" width="100%" alt="promocion"></a>
					</div>
					<div class="card-footer">
						<div class="row">
							<div class="col-6 escala">
								<span class="d-inline-flex fas fa-plane-departure"></span><p class="dato d-inline-flex ml-2 mb-0 ">${item.scales}</p>
								<h4 class="descripcion mt-2 text-danger">${item.description}</h4>
							</div>
							<div class="col-6">
								<p class="text-right mb-0">Precio desde</p>
								<h4 class="text-right text-danger">${item.price}</h4>
							</div>
						</div>
						<div class="row">
							<div class="col-12 text-right">
								<a href="${item.link}" class="text-primary" target="_blanck">VER VUELO</a>
							</div>
						</div>
					</div>
				</div>
			</div>
				`;
			$('#id_destinos').append(mostrarDestino);
			//console.log(mostrarDestino);
			}
		});

	});
	
	$('#2').on('click', function(){
		$('#id_destinos').empty();
		destinos.forEach( (item, index) => {
			if(item.parentId==2){
				var mostrarDestino = `
				<div class="col-12 col-sm-6 col-lg-4 col-xl-3 ">
				<div class="card mt-3">
					<div class="card-body p-0">
						<a href="${item.link}" target="_blanck"><img src="${item.img}" width="100%" alt="promocion"></a>
					</div>
					<div class="card-footer">
						<div class="row">
							<div class="col-6 escala">
								<span class="d-inline-flex fas fa-plane-departure"></span><p class="dato d-inline-flex ml-2 mb-0 ">${item.scales}</p>
								<h4 class="descripcion mt-2 text-danger">${item.description}</h4>
							</div>
							<div class="col-6">
								<p class="text-right mb-0">Precio desde</p>
								<h4 class="text-right text-danger">${item.price}</h4>
							</div>
						</div>
						<div class="row">
							<div class="col-12 text-right">
								<a href="${item.link}" class="text-primary" target="_blanck">VER VUELO</a>
							</div>
						</div>
					</div>
				</div>
			</div>
				`;
			$('#id_destinos').append(mostrarDestino);
			//console.log(mostrarDestino);
			}
		});

	});
	
	$('#3').on('click', function(){
		$('#id_destinos').empty();
		destinos.forEach( (item, index) => {
			if(item.parentId==3){
				var mostrarDestino = `
				<div class="col-12 col-sm-6 col-lg-4 col-xl-3 ">
				<div class="card mt-3">
					<div class="card-body p-0">
						<a href="${item.link}" target="_blanck"><img src="${item.img}" width="100%" alt="promocion"></a>
					</div>
					<div class="card-footer">
						<div class="row">
							<div class="col-6 escala">
								<span class="d-inline-flex fas fa-plane-departure"></span><p class="dato d-inline-flex ml-2 mb-0 ">${item.scales}</p>
								<h4 class="descripcion mt-2 text-danger">${item.description}</h4>
							</div>
							<div class="col-6">
								<p class="text-right mb-0">Precio desde</p>
								<h4 class="text-right text-danger">${item.price}</h4>
							</div>
						</div>
						<div class="row">
							<div class="col-12 text-right">
								<a href="${item.link}" class="text-primary" target="_blanck">VER VUELO</a>
							</div>
						</div>
					</div>
				</div>
			</div>
				`;
			$('#id_destinos').append(mostrarDestino);
			//console.log(mostrarDestino);
			}
		});

	});
	
	$('#4').on('click', function(){
		$('#id_destinos').empty();
		destinos.forEach( (item, index) => {
			if(item.parentId==4){
				var mostrarDestino = `
				<div class="col-12 col-sm-6 col-lg-4 col-xl-3 ">
				<div class="card mt-3">
					<div class="card-body p-0">
						<a href="${item.link}" target="_blanck"><img src="${item.img}" width="100%" alt="promocion"></a>
					</div>
					<div class="card-footer">
						<div class="row">
							<div class="col-6 escala">
								<span class="d-inline-flex fas fa-plane-departure"></span><p class="dato d-inline-flex ml-2 mb-0 ">${item.scales}</p>
								<h4 class="descripcion mt-2 text-danger">${item.description}</h4>
							</div>
							<div class="col-6">
								<p class="text-right mb-0">Precio desde</p>
								<h4 class="text-right text-danger">${item.price}</h4>
							</div>
						</div>
						<div class="row">
							<div class="col-12 text-right">
								<a href="${item.link}" class="text-primary" target="_blanck">VER VUELO</a>
							</div>
						</div>
					</div>
				</div>
			</div>
				`;
			$('#id_destinos').append(mostrarDestino);
			//console.log(mostrarDestino);
			}
		});

	});
		
		
});