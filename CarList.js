function addDrivers(){

          for (let i = 0; i < data.top10.length; i++)
          {        
                top10 += 
                `<h4>${data.top10[i].driver}</h4>
                <div class="progress progress-striped active">
                <div id="${data.top10[i].placement}" class="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-label="Danger striped example" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                <img src="/Cars/${data.top10[i].team}.png">
                </div>
                </div>`
            }
            placeholder.innerHTML = top10;
            var btn = document.getElementById("start")
            btn.style.display = 'none';
            race()
      }
    
