exports.BattleMovedex = {
	/******************************************************************
	Perfect accuracy moves:
	- base power increased 60 to 80

	Justification:
	- perfect accuracy is too underpowered to have such low base power
	- it's not even an adequate counter to accuracy boosting, which
	  is why the latter is banned

	Precedent:
	- Giga Drain and Drain Punch, similar 60 base power moves, have
	  been upgraded
	******************************************************************/
	swift: {
		inherit: true,
		basePower: 80
	},
	faintattack: {
		inherit: true,
		basePower: 80
	},
	shockwave: {
		inherit: true,
		basePower: 80
	},
	/******************************************************************
	Multi-hit moves:
	- changed to perfect accuracy

	Justification:
	- as an Interesting Mechanic in terms of being able to hit past
	  Substitute, it could use a buff

	Flavor justification:
	- You're going to attack that many times and they're all going to
	  miss?
	******************************************************************/
	armthrust: {
		inherit: true,
		accuracy: true
	},
	barrage: {
		inherit: true,
		accuracy: true
	},
	beatup: {
		inherit: true,
		accuracy: true
	},
	bonemerang: {
		inherit: true,
		accuracy: true
	},
	bonerush: {
		inherit: true,
		accuracy: true
	},
	bulletseed: {
		inherit: true,
		accuracy: true
	},
	cometpunch: {
		inherit: true,
		accuracy: true
	},
	doublehit: {
		inherit: true,
		accuracy: true
	},
	doublekick: {
		inherit: true,
		accuracy: true
	},
	doubleslap: {
		inherit: true,
		accuracy: true
	},
	dualchop: {
		inherit: true,
		accuracy: true
	},
	furyattack: {
		inherit: true,
		accuracy: true
	},
	furyswipes: {
		inherit: true,
		accuracy: true
	},
	geargrind: {
		inherit: true,
		accuracy: true
	},
	iciclespear: {
		inherit: true,
		accuracy: true
	},
	pinmissile: {
		inherit: true,
		accuracy: true
	},
	rockblast: {
		inherit: true,
		accuracy: true
	},
	spikecannon: {
		inherit: true,
		accuracy: true
	},
	tailslap: {
		inherit: true,
		accuracy: true
	},
	tailslap: {
		inherit: true,
		accuracy: true
	},
	tailslap: {
		inherit: true,
		accuracy: true
	},
	/******************************************************************
	Signature moves and other moves with limited distribution:
	- buffed in various ways

	Justification:
	- more metagame variety is always good
	******************************************************************/
	twineedle: {
		basePower: 50
	},
	triattack: {
		num: 161,
		accuracy: true,
		basePower: 30,
		category: "Special",
		desc: "Hits 3 times. Has a 10% chance to burn, paralyze or freeze the target each time.",
		shortDesc: "hits 3x; 10% chance to paralyze/burn/freeze.",
		id: "triattack",
		name: "Tri Attack",
		pp: 10,
		isViable: true,
		priority: 0,
		multihit: [3,3],
		secondary: {
			chance: 10,
			onHit: function(target, source) {
				var result = this.random(3);
				if (result===0) {
					target.trySetStatus('brn', source);
				} else if (result===1) {
					target.trySetStatus('par', source);
				} else {
					target.trySetStatus('frz', source);
				}
			}
		},
		target: "normal",
		type: "Normal"
	}
};
