// let filterList = [
// 	'SYLO.mov',
// 	'reciprocity failure.mov',
// 	'solace.mov',
// 	'liquid_pom.mov',
// 	'COLOR RUSH.mov',
// 	'hysteresis.mp4',
// 	'Fetish 4 Beauty.mov',
// 	'flawed cosmetics.mov'
// ];

if (document.URL.indexOf('#unity-games') >= 0) {
	document.getElementById('pills-profile-tab').click();
}

let filterList = [
	{
		name: 'SYLO',
		url: 'https://www.instagram.com/ar/649743079282293/',
		fileName: 'SYLO.mp4'
	},
	{
		name: 'Flawed Cosmetics',
		url: 'https://www.instagram.com/ar/608593183451706/',
		fileName: 'flawed_cosmetics.mp4'
	},
	{
		name: 'Reciprocity Failure',
		url: 'https://www.instagram.com/ar/305474007959114/',
		fileName: 'reciprocity_failure.mp4'
	},
	{
		name: 'The Batman',
		url: 'https://www.instagram.com/ar/644587796769297/',
		fileName: 'batman.mp4'
	},
	{
		name: 'Solace',
		url: 'https://www.instagram.com/ar/1261384794232541/',
		fileName: 'solace.mp4'
	},
	{
		name: 'CCTV',
		url: 'https://www.instagram.com/ar/996915064380821/',
		fileName: 'CCTV.mp4'
	},
	{
		name: 'Hysteresis',
		url: 'https://www.instagram.com/ar/312942303749198/',
		fileName: 'hysteresis.mp4'
	},
	{
		name: 'liquid_pom',
		url: 'https://www.instagram.com/ar/222352282915994/',
		fileName: 'liquid_pom.mp4'
	}
];

const filterGrid = document.querySelector('#filter-grid');

let rowClasses = 'row px-lg-5 mx-lg-5 mx-1 my-1 g-4'.split(' ');

for (let j = 0; j < Math.ceil(filterList.length / 4); j++) {
	let row = document.createElement('div');
	row.classList.add(...rowClasses);
	filterGrid.append(row);

	for (let i = 0; i < 4; i++) {
		let col = document.createElement('div');
		col.classList.add('col-md-3', 'col-6');
		row.append(col);

		let rowVideo = document.createElement('div');
		rowVideo.classList.add('row');
		col.append(rowVideo);

		let colVideo = document.createElement('div');
		colVideo.classList.add('col');
		rowVideo.append(colVideo);

		let aVidLink = document.createElement('a');
		aVidLink.href = `${filterList[i + 4 * j]['url']}`;

		let video = document.createElement('video');
		video.loop = true;
		video.muted = true;
		video.autoplay = true;
		video.playsInline = true;

		let source = document.createElement('source');
		source.type = 'video/mp4';
		source.src = `assets/${filterList[i + 4 * j]['fileName']}`;

		video.append(source);

		aVidLink.classList.add('hvr-fade');

		aVidLink.append(video);

		colVideo.append(aVidLink);

		let rowBtn = document.createElement('div');
		rowBtn.classList.add('row', 'my-2');
		col.append(rowBtn);

		let colBtn = document.createElement('div');
		colBtn.classList.add('col', 'd-flex', 'justify-content-center');
		rowBtn.append(colBtn);

		let a = document.createElement('a');
		a.href = `${filterList[i + 4 * j]['url']}`;
		colBtn.append(a);

		a.classList.add('btn', 'btn-outline-light', 'text-nowrap');
		a.role = 'button';
		a.innerText = `${filterList[i + 4 * j]['name']}`;

		// let button = document.createElement('button');
		// button.type = 'button';
		// button.classList.add('btn', 'btn-outline-light', 'text-nowrap');
		// button.innerText = `${filterList[i + 4 * j]['name'].slice(0, -4)}`;

		// a.append(button);

		// let colVideo = document.createElement('div');
		// colVideo.classList.add('col');
		// rowVideo.append(colVideo);
	}
}

// let filterBtnDiv = document.createElement('div');
// filterBtnDiv.classList.add('d-flex', 'justify-content-center');

// let filterLink = document.createElement('a');
// a.href = 'https://www.facebook.com/sparkarhub/portfolios/ig/syvertion/';

// let filterBtn = document.createElement('button');

// filterBtn.type = 'button';
// filterBtn.classList.add('btn', 'btn-outline-light', 'text-nowrap', 'fs-3');
// filterBtn.innerText('See Full Filter List');

// filterBtnDiv.append(filterLink);
// filterLink.append(filterBtn);

// filterGrid.append(filterBtnDiv);
