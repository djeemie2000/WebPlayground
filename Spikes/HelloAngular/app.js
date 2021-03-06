(function(){

var helloApp = angular.module('helloApp', ['ngMaterial']);

// we use the controller as idiom no need to pass the $scope everywhere
// => need to use this, which is more familiar for java/c++ programmers
helloApp.controller('PatchesController', function() {
	this.patches = {
		patches: [
			{
				name: 'Patch1',
				path: '/patches/Patch1.xml'
			},
			{
				name: 'Patch2',
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
				name: 'Patch5',
				path: '/patches/Patch5.xml'
			}
		]
	};
});

helloApp.controller('ModulesController', function() {
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
});

})();
