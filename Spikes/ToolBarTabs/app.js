(function(){

var myApp = angular.module('myApp', ['ngMaterial']);


myApp.service('modularService', function($http, $log) {

		this.patches = {};
		this.modules = {};
		this.moduleTypes = {};

		this.retrievePatches = function() {
			this.patches = {
				patches: [
					{
						name: 'Patch1_Distorted',
						path: '/patches/Patch1.xml'
					},
					{
						name: 'Patch2_flowpad',
						path: '/patches/Patch2.xml'
					},
					{
						name: 'Patch3',
						path: '/patches/Patch3.xml'
					},
					{
						name: 'Patch4',
						path: '/patches/Patch4.xml'
					},
					{
						name: 'TremeloGuitar1',
						path: '/patches/Patch5.xml'
					},
					{
						name: 'TremeloGuitar2',
						path: '/patches/Patch6.xml'
					}
				]
			};
		};

		this.loadPatch = function(name) {
			$log.log('loading patch ' + name);
			//TODO actual implementation
			// TODO update modules after new patch is loaded!
			this.retrieveModules();
			// TODO return promise with name for success/failure? -> current Patch = ...
		}

		this.savePatchAs = function(name) {
			$log.log('saving patch as ' + name);
			//TODO when saved, update patches
			this.retrievePatches();
		// TODO return promise with name for success/failure? -> current Patch = ...
		}

		this.retrieveModules = function() {
			$log.log('retrieving modules');

			this.modules = {
				modules: [
						{
							name: 'Amp0',
							type: 'Amp',
							connectors: [
								{
									name: 'In',
									type: 'audio',
									mode: 'in'
								},
								{
									name: 'Amp',
									type: 'audio',
									mode: 'in'
								},
								{
									name: 'Out',
									type: 'audio',
									mode: 'out'
								}
							],
							parameters: [
								//TODO
							]
						},
						{
							name: 'MidiNote1',
							type: 'MidiNote',
							connectors: [
								{
									name: 'MidiIn',
									type: 'midi',
									mode: 'in'
								},
								{
									name: 'Freq',
									type: 'audio',
									mode: 'out'
								},
								{
									name: 'Gate',
									type: 'audio',
									mode: 'out'
								},
								{
									name: 'Velocity',
									type: 'audio',
									mode: 'out'
								}
							],
							parameters: [
								//TODO
							]
						},
						{
							name: 'StepSeq3',
							type: 'StepSeq',
							connectors: [
								{
									name: 'MidiOut',
									type: 'midi',
									mode: 'out'
								}
							],
							parameters: [
								//TODO
							]
						}
				]
			};
		};

		this.removeModule = function(name) {
			$log.log('removing module ' + name);
			//TODO should call rest api using http, then update using retrieveModules();
			for(var i=0; i<this.modules.modules.length; i++) {
	        if(this.modules.modules[i].name == name) {
	          this.modules.modules.splice(i, 1);
	        	break;
	        }
	    }
		};

		this.retrieveModuleTypes = function() {
			$log.log('retrieving module types');

			this.moduleTypes = {
				moduleTypes: [
					{
						category: 'CV',
						types: [
							'ControllerBank(4)',
							'ControllerBank(8)',
							'LFOBank(4)',
							'LFOBank(8)'
						]
					},
					{
						category: 'Oscillate',
						types: [
							'Phasor',
							'Operator',
							'Noise',
							'SimpleOscillator'
						]
					},
					{
						category: 'midi',
						types: [
							'MidiNote',
							'MidiController'
						]
					}
				]
			};
		};

		this.addModule = function(type) {
			$log.log('adding module ' + type);
			//TODO implementation
			// update modules
			this.retrieveModules();
			//TODO return promise?
		};

});

// we use the controller-as idiom, so no need to pass the $scope everywhere
// => need to use this, which is more familiar for java/c++ programmers
myApp.controller('PatchesController', function(modularService) {
	this.currentPatch = "";
	modularService.retrievePatches();//here?

	this.loadPatch = function(name) {
		modularService.loadPatch(name);
		this.currentPatch = name;
	};

	this.getPatches = function() {
		return modularService.patches;
	}
});

myApp.controller('ModulesController', function(modularService) {
	// 'constructor' stuff
	modularService.retrieveModules();
	modularService.retrieveModuleTypes();
	this.showModules = new Map();
	for(var idx = 0; idx < modularService.modules.length; ++idx)
	{
		this.showModules[modularService.modules[idx].name] = false;
	}
	//

	this.getModules = function() {
		return modularService.modules;
	};

	this.getModuleTypes = function() {
		return modularService.moduleTypes;
	};

	this.toggleShowModule = function(name) {
		this.showModules[name] = !this.showModules[name];
	};

	this.getShowModule = function(name) {
		return this.showModules[name];
	};

	this.removeModule = function(name) {
		modularService.removeModule(name);
	};
});

})();
