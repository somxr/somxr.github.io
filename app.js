document.addEventListener('DOMContentLoaded', function() {
    function createContentBlock({videoFirst, videoSrc, imageSrc, title, subtitle, description, link, linkText}) {
      // Create the main container div
      const container = document.createElement('div');
      container.className = 'container px-3 px-sm-1 px-md-0 mb-sm-5 pb-sm-5 pb-4 mb-4';
      
      // Create the row
      const row = document.createElement('div');
      row.className = 'row';
      container.appendChild(row);
      
      // Video block
      const videoBlock = document.createElement('div');
      videoBlock.className = 'col-6 d-flex justify-content-center';
      videoBlock.innerHTML = `
        <video class="manneq-video" autoplay loop muted defaultMuted playsinline>
          <source src="${videoSrc}" type="video/mp4">
        </video>
      `;
      
      // Info block
      const infoBlock = document.createElement('div');
      infoBlock.className = 'col-6 d-flex flex-column justify-content-center';
      infoBlock.innerHTML = `
        <div class="row mb-1 mb-sm-0">
          <div class="col-1 col-md-4"></div>
          <div class="col d-flex justify-content-center">
            <img src="${imageSrc}" alt="" style="border-radius: 25px; width: 50%;">
          </div>
          <div class="col-1 col-md-4"></div>
        </div>
        <div class="row pt-md-4">
          <div class="col d-flex justify-content-center">
            <h1 class="text-white mb-0 d-none d-sm-block text-center">${title}</h1>
            <h1 class="text-white mb-0 d-sm-none text-center" style="font-size:5vw;">${title}</h1>
          </div>
        </div>
        <div class="row mb-md-3">
          <div class="col d-flex justify-content-center align-items-top">
            <h4 class="text-white fw-light d-none d-sm-block text-center">${subtitle}</h4>
            <h4 class="text-white fw-light d-sm-none text-center" style="font-size:3.25vw;">${subtitle}</h4>
          </div>
        </div>
        <div class="row px-lg-4 mx-lg-4 px-0 mx-0">
          <h3 class="text-white fw-light d-none d-md-block text-center">${description}</h3>
          <h3 class="text-white fw-light d-md-none text-center" style="font-size:3.25vw;">${description}</h3>
        </div>
        <div class="row my-1 my-sm-3">
          <div class="col d-flex justify-content-center">
            <a class="btn btn-outline-light text-nowrap p-1 p-sm-2 btn-lg fs-4" href="${link}" role="button">${linkText}</a>
          </div>
        </div>
      `;
      
      // Append blocks to the row in the specified order
      if (videoFirst) {
        row.appendChild(videoBlock);
        row.appendChild(infoBlock);
      } else {
        row.appendChild(infoBlock);
        row.appendChild(videoBlock);
      }
      
      // Find the placeholder element and append the container to it
      const placeholder = document.getElementById('dynamic-content');
      placeholder.appendChild(container);
    }

    // Example usage
    createContentBlock({
        videoFirst: true,
        videoSrc: 'assets/no_tears.mp4',
        imageSrc: 'assets/no_tears_logo.png',
        title: 'No Tears',
        subtitle: 'Instagram / Meta Spark / Photoshop',
        description: 'Augments animated type and makeup on the user\'s face.',
        link: '/no_tears.html',
        linkText: 'Learn more'
    });

	// Second block
    createContentBlock({
        videoFirst: false,
        videoSrc: 'assets/reciprocity_failure.mp4',
        imageSrc: 'assets/RF_white.jpg',
        title: 'Reciprocity Failure',
        subtitle: 'Instagram / Meta Spark / Blender',
        description: 'Augments real time smoke effects on the user\'s body.',
        link: '/reciprocity_failure.html',
        linkText: 'Learn more'
    });

    // Repeat the above call to createContentBlock with different parameters as needed
});



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

// if (document.URL.indexOf('#unity-games') >= 0) {
// 	document.getElementById('pills-profile-tab').click();
// }

// let filterList = [
// 	{
// 		name: 'SYLO',
// 		url: 'https://www.instagram.com/ar/649743079282293/',
// 		fileName: 'SYLO.mp4'
// 	},
// 	{
// 		name: 'Flawed Cosmetics',
// 		url: 'https://www.instagram.com/ar/608593183451706/',
// 		fileName: 'flawed_cosmetics.mp4'
// 	},
// 	{
// 		name: 'Reciprocity Failure',
// 		url: 'https://www.instagram.com/ar/305474007959114/',
// 		fileName: 'reciprocity_failure.mp4'
// 	},
// 	{
// 		name: 'The Batman',
// 		url: 'https://www.instagram.com/ar/644587796769297/',
// 		fileName: 'batman.mp4'
// 	},
// 	{
// 		name: 'Solace',
// 		url: 'https://www.instagram.com/ar/1261384794232541/',
// 		fileName: 'solace.mp4'
// 	},
// 	{
// 		name: 'CCTV',
// 		url: 'https://www.instagram.com/ar/996915064380821/',
// 		fileName: 'CCTV.mp4'
// 	},
// 	{
// 		name: 'Hysteresis',
// 		url: 'https://www.instagram.com/ar/312942303749198/',
// 		fileName: 'hysteresis.mp4'
// 	},
// 	{
// 		name: 'liquid_pom',
// 		url: 'https://www.instagram.com/ar/222352282915994/',
// 		fileName: 'liquid_pom.mp4'
// 	}
// ];

// const filterGrid = document.querySelector('#filter-grid');

// let rowClasses = 'row px-lg-5 mx-lg-5 mx-1 my-1 g-4'.split(' ');

// for (let j = 0; j < Math.ceil(filterList.length / 4); j++) {
// 	let row = document.createElement('div');
// 	row.classList.add(...rowClasses);
// 	filterGrid.append(row);

// 	for (let i = 0; i < 4; i++) {
// 		let col = document.createElement('div');
// 		col.classList.add('col-md-3', 'col-6');
// 		row.append(col);

// 		let rowVideo = document.createElement('div');
// 		rowVideo.classList.add('row');
// 		col.append(rowVideo);

// 		let colVideo = document.createElement('div');
// 		colVideo.classList.add('col');
// 		rowVideo.append(colVideo);

// 		let aVidLink = document.createElement('a');
// 		aVidLink.href = `${filterList[i + 4 * j]['url']}`;

// 		let video = document.createElement('video');
// 		video.loop = true;
// 		video.muted = true;
// 		video.autoplay = true;
// 		video.playsInline = true;

// 		let source = document.createElement('source');
// 		source.type = 'video/mp4';
// 		source.src = `assets/${filterList[i + 4 * j]['fileName']}`;

// 		video.append(source);

// 		aVidLink.classList.add('hvr-fade');

// 		aVidLink.append(video);

// 		colVideo.append(aVidLink);

// 		let rowBtn = document.createElement('div');
// 		rowBtn.classList.add('row', 'my-2');
// 		col.append(rowBtn);

// 		let colBtn = document.createElement('div');
// 		colBtn.classList.add('col', 'd-flex', 'justify-content-center');
// 		rowBtn.append(colBtn);

// 		let a = document.createElement('a');
// 		a.href = `${filterList[i + 4 * j]['url']}`;
// 		colBtn.append(a);

// 		a.classList.add('btn', 'btn-outline-light', 'text-nowrap');
// 		a.role = 'button';
// 		a.innerText = `${filterList[i + 4 * j]['name']}`;

		// let button = document.createElement('button');
		// button.type = 'button';
		// button.classList.add('btn', 'btn-outline-light', 'text-nowrap');
		// button.innerText = `${filterList[i + 4 * j]['name'].slice(0, -4)}`;

		// a.append(button);

		// let colVideo = document.createElement('div');
		// colVideo.classList.add('col');
		// rowVideo.append(colVideo);
// 	}
// }

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
