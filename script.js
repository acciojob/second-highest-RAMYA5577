function secondHighest(arr) {
			//Write your code here
			let big=arr[0];
			let sbig="-infinity";
			for(let k of arr){
				if(k>big){
					sbig=big;
					big=k;
				}
				else if(k>sbig && k!=big){
					sbig=k;
				}
			}
			return sbig;
		}

		function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i+1));
				
			}
			alert(secondHighest(arr));
		}
		Main();