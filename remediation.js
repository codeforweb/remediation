(()=>{
	const currentScript = document.currentScript;
	const siteID = currentScript.dataset.siteId;
	const scriptUrl = new URL(currentScript.src);
	const scriptDirectory = scriptUrl.pathname.substring(0, scriptUrl.pathname.lastIndexOf('/') + 1);
	const sitesConfig = scriptDirectory + 'sites.json';	
	if(siteID){
		fetch(sitesConfig)
			.then((response)=>{
				if(!response.ok) throw new Error('Network response was not ok');
				return response.json();
			})
			.then((sites)=>{
				if(sites[siteID]){
			        const URL = scriptDirectory + sites[siteID];
			              fetch(URL)
			                .then((res) => res.text())
			                .then((text) => {
			                const scriptElm = document.createElement('script');
			                var inlineCode = document.createTextNode(text);
			                scriptElm.appendChild(inlineCode);
			                document.body.appendChild(scriptElm);
			            }).catch((e) => console.error(e));					
				}else throw new Error('Site not found');
				
			}			
		).catch((e) => console.error(e));
	}
})();	