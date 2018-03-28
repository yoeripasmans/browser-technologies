(function() {
	var context;
	//Feature detection
	if (document.querySelector || ('classList' in document.body)) {
		try {
			// Fix up for prefixing
			window.AudioContext = window.AudioContext || window.webkitAudioContext;
			context = new AudioContext();
		} catch (e) {
			alert('Web Audio API is not supported in this browser');
		}
	} else {
		return false;
	}

	var audioElements = document.querySelectorAll('audio');
	var audioElementsWrapper = document.querySelector('.audio-elements');
	audioElementsWrapper.classList.add("hidden");
	var audioSrc = [];
	//Get src and hide audio elements
	for (var i = 0; i < audioElements.length; i++) {
		audioSrc.push(audioElements[i].getAttribute("src"));
	}

	//config bufferloader with audio src from audio elements
	var bufferLoader = new BufferLoader(
		context, audioSrc,
		bufferLoadCompleted
	);
	//initialize bufferloader
	bufferLoader.load();

	function bufferLoadCompleted(bufferList) {

		for (var i = 0; i < bufferList.length; i++) {
			bufferList[i].src = audioElements[i].getAttribute("src");
			bufferList[i].name = audioElements[i].getAttribute("data-instrument");
			bufferList[i].category = audioElements[i].getAttribute("data-sound-category");
		}

		var instruments = bufferList.filter(function(d) {
			if (d.category == "instrument") {
				return true;
			} else {
				return false;
			}
		});

		var loops = bufferList.filter(function(d) {
			if (d.category == "loops") {
				return true;
			} else {
				return false;
			}
		});

		createPads(instruments);
		createAudioPlayer(loops);

		var keys = ["3", "4", "5", "6", "e", "r", "t", "y", "d", "f", "g", "h", "c", "v", "b", "n"];

		window.addEventListener("keydown", function(e) {
			for (var i = 0; i < instruments.length; i++) {
				switch (e.key) {
					case keys[i]:
						playSound(instruments[i], 0);
						document.querySelector('.' + instruments[i].name).classList.add("active");
				}
			}

			// Cancel the default action to avoid it being handled twice
			// e.preventDefault();
		}, true);

		window.addEventListener("keyup", function(e) {

			for (var i = 0; i < instruments.length; i++) {
				switch (e.key) {
					case keys[i]:
						document.querySelector('.' + instruments[i].name).classList.remove("active");
				}
			}
		}, true);

	}

	function createAudioPlayer(loops) {

		var playButton = document.querySelector('#play-button');
		var stopButton = document.querySelector('#stop-button');
		var nextButton = document.querySelector('#next-button');
		var prevButton = document.querySelector('#prev-button');
		var audioControls = document.querySelector('.audio-controls');
		audioControls.classList.add("active");

		var audioPlayer = {
			playing: false,
			index: 0,

			createSource: function(buffer) {
				var source = context.createBufferSource();
				source.buffer = buffer;
				source.loop = true;
				source.connect(context.destination);
				return source;
			},
			playSound: function() {
				if (this.playing === false) {
					this.source = this.createSource(loops[this.index]);
					if (!this.source.start) {
						this.source.noteOn(0);
					} else {
						this.source.start(0);
					}
				}
				this.playing = true;
			},
			stopSound: function() {
				if (this.playing === true) {
					if (!this.source.stop) {
						this.source.noteOff(0);
					} else {
						this.source.stop(0);
					}
				}
				this.playing = false;
			},
			toggleButtons: function() {
				if (this.playing == true) {
					playButton.classList.add("hidden");
					stopButton.classList.remove("hidden");
				} else {
					stopButton.classList.add("hidden");
					playButton.classList.remove("hidden");
				}
			},
			nextSound: function() {
				if (loops.length === (this.index + 1)) {
					if (this.playing == true) {
						this.stopSound();
					}
					this.index = 0;
					this.playSound();
				} else {
					if (this.playing == true) {
						this.stopSound();
					}
					this.index++;
					this.playSound();
				}
			},
			prevSound: function() {
				if (this.index === 0) {
					if (this.playing == true) {
						this.stopSound();
					}
					this.index = (loops.length - 1);
					this.playSound();

				} else {
					this.stopSound();
					this.index--;
					this.playSound();
				}
			}

		};

		playButton.addEventListener("click", function(e) {
			audioPlayer.playSound();
			audioPlayer.toggleButtons();
			e.preventDefault();
		});

		stopButton.addEventListener("click", function() {
			audioPlayer.stopSound();
			audioPlayer.toggleButtons();

		});
		nextButton.addEventListener("click", function() {
			audioPlayer.nextSound();
			audioPlayer.toggleButtons();
		});
		prevButton.addEventListener("click", function() {
			audioPlayer.prevSound();
			audioPlayer.toggleButtons();
		});


	}

	function createPads(instruments) {

		for (var i = 0; i < instruments.length; i++) {
			(function() {
				var j = i;
				var button = document.createElement("button");
				document.querySelector('.audio-buttons').appendChild(button);
				button.textContent = instruments[j].name;
				button.classList.add("sound-button", instruments[j].name);
				button.setAttribute("data-instrument", instruments[j].name);
				button.addEventListener("click", function() {
					playSound(instruments[j], 0);
				});
				button.addEventListener("mousedown", function() {
					this.classList.add("active");
				});
				button.addEventListener("mouseup", function() {
					this.classList.remove("active");
				});
			})();
		}
	}

	function playSound(buffer) {
		var source = context.createBufferSource();
		source.buffer = buffer;
		source.connect(context.destination);
		if (!source.start) {
			source.noteOn(0);
		} else {
			source.start(0);
		}
	}

})();