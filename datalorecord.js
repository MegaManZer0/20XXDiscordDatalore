// Load up the discord.js library
const Discord = require("discord.js");

const alternameNames = {
	"nrgnut":"charged nut",
	"nrg nut":"charged nut",
	"reflapp":"re-flapp",
	"minimech o grinder":"minimech o. grinder",
	"minimech":"minimech o. grinder",
	"nbuster":"n-buster",
	"buster":"n-buster",
	"saber":"a-saber",
	"spear":"sharp sharp spear",
	"blender":"plasma blender",
	"plasmablender":"plasma blender",
	"glaive":"spinning glaive",
	"axe":"rippling axe",
	"ripplingaxe":"ripplingaxe",
	"lemons":"n-buster",
	"armatorts dome":"armatort's dome",
	"armahelm":"armatort's dome",
	"arma helm":"armatort's dome",
	"arma head":"armatort's dome",
	"armahead":"armatort's dome",
	"armatorts shell":"armatort's shell",
	"armabody":"armatort's shell",
	"arma body":"armatort's shell",
	"armachest":"armatort's shell",
	"arma chest":"armatort's shell",
	"armatorts pound":"armatort's pound",
	"armaarm":"armatort's pound",
	"arma arm":"armatort's pound",
	"armaarms":"armatort's pound",
	"arma arms":"armatort's pound",
	"armatorts momentum":"armatort's momentum",
	"armaleg":"armatort's momentum",
	"arma leg":"armatort's momentum",
	"armalegs":"armatort's momentum",
	"arma legs":"armatort's momentum",
	"arma set":"armatort, the unstoppable",
	"armaset":"armatort, the unstoppable",
	"armatort the unstoppable":"armatort, the unstoppable",
	"dracopents fang":"dracopent's fang",
	"dracohelm":"dracopent's fang",
	"draco helm":"dracopent's fang",
	"draco head":"dracopent's fang",
	"dracohead":"dracopent's fang",
	"dracopents pride":"dracopent's pride",
	"dracobody":"dracopent's pride",
	"draco body":"dracopent's pride",
	"dracochest":"dracopent's pride",
	"draco chest":"dracopent's pride",
	"dracopents claw":"dracopent's claw",
	"dracoarm":"dracopent's claw",
	"draco arm":"dracopent's claw",
	"dracoarms":"dracopent's claw",
	"draco arms":"dracopent's claw",
	"dracopents bound":"dracopent's bound",
	"dracoleg":"dracopent's bound",
	"draco leg":"dracopent's bound",
	"dracolegs":"dracopent's bound",
	"draco legs":"dracopent's bound",
	"draco set":"dracopent, the foul",
	"dracoset":"dracopent, the foul",
	"dracopent the foul":"dracopent, the foul",
	"owlhawks focus":"owlhawk's focus",
	"owlhelm":"owlhawk's focus",
	"owl helm":"owlhawk's focus",
	"owl head":"owlhawk's focus",
	"owlhead":"owlhawk's focus",
	"owlhawks reign":"owlhawk's reign",
	"owlbody":"owlhawk's reign",
	"owl body":"owlhawk's reign",
	"owlchest":"owlhawk's reign",
	"owl chest":"owlhawk's reign",
	"owlhawks talon":"owlhawk's talon",
	"owlarm":"owlhawk's talon",
	"owl arm":"owlhawk's talon",
	"owlarms":"owlhawk's talon",
	"owl arms":"owlhawk's talon",
	"owlhawks feather":"owlhawk's feather",
	"owlleg":"owlhawk's feather",
	"owl leg":"owlhawk's feather",
	"owllegs":"owlhawk's feather",
	"owl legs":"owlhawk's feather",
	"owl set":"owlhawk, the wise",
	"owlset":"owlhawk, the wise",
	"owlhawk the wise":"owlhawk, the wise",
	"oxjacks ken":"oxjack's ken",
	"oxhelm":"oxjack's ken",
	"ox helm":"oxjack's ken",
	"ox head":"oxjack's ken",
	"oxhead":"oxjack's ken",
	"oxjacks guile":"oxjack's guile",
	"oxbody":"oxjack's guile",
	"ox body":"oxjack's guile",
	"oxchest":"oxjack's guile",
	"ox chest":"oxjack's guile",
	"oxjacks fury":"oxjack's fury",
	"oxarm":"oxjack's fury",
	"ox arm":"oxjack's fury",
	"oxarms":"oxjack's fury",
	"ox arms":"oxjack's fury",
	"oxjacks blitz":"oxjack's blitz",
	"oxleg":"oxjack's blitz",
	"ox leg":"oxjack's blitz",
	"oxlegs":"oxjack's blitz",
	"ox legs":"oxjack's blitz",
	"ox set":"oxjack, the flash",
	"oxset":"oxjack, the flash",
	"oxjack the flash":"oxjack, the flash",
	"armatorts dome+":"armatort's dome",
	"armahelm+":"armatort's dome",
	"arma helm+":"armatort's dome",
	"arma head+":"armatort's dome",
	"armahead+":"armatort's dome",
	"armatorts shell+":"armatort's shell",
	"armabody+":"armatort's shell",
	"arma body+":"armatort's shell",
	"armachest+":"armatort's shell",
	"arma chest+":"armatort's shell",
	"armatorts pound+":"armatort's pound",
	"armaarm+":"armatort's pound",
	"arma arm+":"armatort's pound",
	"armaarms+":"armatort's pound",
	"arma arms+":"armatort's pound",
	"armatorts momentum+":"armatort's momentum",
	"armaleg+":"armatort's momentum",
	"arma leg+":"armatort's momentum",
	"armalegs+":"armatort's momentum",
	"arma legs+":"armatort's momentum",
	"arma set+":"armatort, the unstoppable",
	"armaset+":"armatort, the unstoppable",
	"armatort the unstoppable+":"armatort, the unstoppable",
	"dracopents fang+":"dracopent's fang",
	"dracohelm+":"dracopent's fang",
	"draco helm+":"dracopent's fang",
	"draco head+":"dracopent's fang",
	"dracohead+":"dracopent's fang",
	"dracopents pride+":"dracopent's pride",
	"dracobody+":"dracopent's pride",
	"draco body+":"dracopent's pride",
	"dracochest+":"dracopent's pride",
	"draco chest+":"dracopent's pride",
	"dracopents claw+":"dracopent's claw",
	"dracoarm+":"dracopent's claw",
	"draco arm+":"dracopent's claw",
	"dracoarms+":"dracopent's claw",
	"draco arms+":"dracopent's claw",
	"dracopents bound+":"dracopent's bound",
	"dracoleg+":"dracopent's bound",
	"draco leg+":"dracopent's bound",
	"dracolegs+":"dracopent's bound",
	"draco legs+":"dracopent's bound",
	"draco set+":"dracopent, the foul",
	"dracoset+":"dracopent, the foul",
	"dracopent the foul+":"dracopent, the foul",
	"owlhawks focus+":"owlhawk's focus",
	"owlhelm+":"owlhawk's focus",
	"owl helm+":"owlhawk's focus",
	"owl head+":"owlhawk's focus",
	"owlhead+":"owlhawk's focus",
	"owlhawks reign+":"owlhawk's reign",
	"owlbody+":"owlhawk's reign",
	"owl body+":"owlhawk's reign",
	"owlchest+":"owlhawk's reign",
	"owl chest+":"owlhawk's reign",
	"owlhawks talon+":"owlhawk's talon",
	"owlarm+":"owlhawk's talon",
	"owl arm+":"owlhawk's talon",
	"owlarms+":"owlhawk's talon",
	"owl arms+":"owlhawk's talon",
	"owlhawks feather+":"owlhawk's feather",
	"owlleg+":"owlhawk's feather",
	"owl leg+":"owlhawk's feather",
	"owllegs+":"owlhawk's feather",
	"owl legs+":"owlhawk's feather",
	"owl set+":"owlhawk, the wise",
	"owlset+":"owlhawk, the wise",
	"owlhawk the wise+":"owlhawk, the wise",
	"oxjacks ken+":"oxjack's ken",
	"oxhelm+":"oxjack's ken",
	"ox helm+":"oxjack's ken",
	"ox head+":"oxjack's ken",
	"oxhead+":"oxjack's ken",
	"oxjacks guile+":"oxjack's guile",
	"oxbody+":"oxjack's guile",
	"ox body+":"oxjack's guile",
	"oxchest+":"oxjack's guile",
	"ox chest+":"oxjack's guile",
	"oxjacks fury+":"oxjack's fury",
	"oxarm+":"oxjack's fury",
	"ox arm+":"oxjack's fury",
	"oxarms+":"oxjack's fury",
	"ox arms+":"oxjack's fury",
	"oxjacks blitz+":"oxjack's blitz",
	"oxleg+":"oxjack's blitz",
	"ox leg+":"oxjack's blitz",
	"oxlegs+":"oxjack's blitz",
	"ox legs+":"oxjack's blitz",
	"ox set+":"oxjack, the flash",
	"oxset+":"oxjack, the flash",
	"oxjack the flash+":"oxjack, the flash"
};


//Including the Datalore file so that only 1 file must be maintained across both bots
const dataloreInfo = {
	"zookeeper's sigil":"Zookeeper's Sigil: Repros deal 25% additional damage.",
	"zephyr":"Zephyr: Increases attack speed.",
	"xcalber":"XCALBER: Attack damage up! Power damage down. (+2 Max Health, +2 ATK. -2 PWR, -2 Max NRG.)",
	"world slug":"World Slug: Platforms slow down (starting next level.)",
	"vitality scavenger":"Vitality Scavenger: Enemies drop more health.",
	"vitaboost":"Vitaboost: +1 Max HP, Max NRG, and Armor!",
	"vibroreserve":"Vibroreserve: Max energy +6!",
	"vibrofocus":"Vibrofocus: Trades NRG for HP and Power Damage. (+1 Health, +4 PWR, -4 Max NRG.)",
	"vendsmasher":"Vendsmasher: Destroyed vending machines give additional pickups.",
	"utilifier":"Utilifier: Power Damage for NRG. (+12 Max NRG, - 5 PWR)",
	"unflappable":"Unflappable: Become immune to Flapp-based damage. Prevents Flapps from hurting or targeting the player.",
	"tiny flamespewer":"Tiny Flamespewer: Spews flame cones at foes! Shoots 3 projectile fireballs at enemies. (Damage = PWR x 1.5.)",
	"thunderous boon":"Thunderous Boon: Powers deal massively more damage! (+6 PWR)",
	"thrillseeker":"Thrillseeker: Future stages have Glory Zones.",
	"thrift actuator":"Thrift Actuator: One shop item is ALWAYS on sale! Stackable.",
	"thorned hull":"Thorned Hull: Attack Damage scales up with health! (Every 4 Health = +1 ATK)",
	"the volunteer":"The Volunteer: Future stages have Very Safe Labs.",
	"the rebeginner":"The Rebeginner: Sacrifices himself for you if you die.",
	"system restore":"System Restore: Cures you of any already-acquired Prototype penalties.",
	"strongarm band":"Strongarm Band: Basic attacks deal slightly more damage. (+1 ATK)",
	"striking feather":"Striking Feather: Trades attack damage for NRG, HP and power damage. (+2 Max Health, +2 Max NRG, +2 PWR, -2 ATK.)",
	"static clicklets":"Static Clicklets: Cling to walls! [Down to slide]",
	"skittery smuggler":"Skittery Smuggler: Smuggles your nuts. (Flies towards dropped nuts, eating 10 of them. Once full, produces 2 random Augs.)",
	"splintering twinifier":"Splintering Twinifier: Twinifies all future repros.",
	"spillover matrix":"Spillover Matrix: Extra health becomes energy! (Not the other way around.)",
	"spicy incense":"Spicy Incense: +1 Attack Damage per level and also now.",
	"shockwave sidekick":"Shockwave Sidekick: Wow, a penguin! Dashes towards the player every 2 seconds, firing projectiles in 4 cardinal directions (Damage = PWR x 2.)",
	"shinier token":"Shinier Token: Counts as 3 tokens. Wow!",
	"seven leaf clover":"Seven Leaf Clover: Enemies drop more everything.",
	"scrapmetal scavenger":"Scrapmetal Scavenger: Enemies drop more nuts.",
	"regenerative plating":"Regenerative Plating: .+2 HP at level start.",
	"reflapp":"Re-Flapp: Headbutts nearby foes. (Damage = ATK x 1. Deals ATK x 10 to Flapps.)",
	"re-flapp":"Re-Flapp: Headbutts nearby foes. (Damage = ATK x 1. Deals ATK x 10 to Flapps.)",
	"reclaimed spark":"Reclaimed Spark: Powers deal slightly more damage. (+1 PWR, +1 Max NRG.)",
	"quantum spook":"Quantum Spook: All attacks ignore walls and shields!",
	"pure flame":"Pure Flame: .+1 Power Damage per level (and now.)",
	"power enhancer":"Power Enhancer: Powers deal more damage. (+3 PWR)",
	"potato battery":"Potato Battery: Max energy +3!",
	"plumber hat":"Plumber Hat: Boosts both jumping and plumbing abilities. (+4 JMP.)",
	"patchwork connector":"Patchwork Connector: Set requirements reduced by one piece.",
	"nutsaving stringwire":"Nutsaving Stringwire: 50% chance to use a machine for free.",
	"nut replicator":"Nut Replicator: Your unspent nuts pay dividends (20%/level.)",
	"ninja sash":"Ninja Sash: Increases your speed! Gotta go fast. (+2 SPD)",
	"murderdrone":"Murderdrone: A friendly blaster orbits you, attacking foes. (Damage = ATK x 1.)",
	"mixmatch mastery":"Mixmatch Mastery: Cores from different sets boost stats!",
	"minimech o. grinder":"Minimech O. Grinder: A friendly guardian orbits you, deflecting projectiles.",
	"minimech o grinder":"Minimech O. Grinder: A friendly guardian orbits you, deflecting projectiles.",
	"minimech":"Minimech O. Grinder: A friendly guardian orbits you, deflecting projectiles.",
	"mistimed protector":"Mistimed Protector: Extends your invuln frames.",
	"meganut":"Meganut: .+25 Nuts!",
	"megaheart":"Megaheart: Max health +4!",
	"life extender":"Life Extender: Max health +1.",
	"leafpetal":"Leafpetal: Become slightly speedier. (+2 SPD, +1 JMP).",
	"leafmetal plating":"Leafmetal Plating: Become fast and durable as the wind. (-2 Max Health, +4 SPD, +4 JMP.)",
	"kinetic resonator":"Kinetic Resonator: Increases the effects of equipped Leg Cores. To view effects on specific Core Augs search for the Core with a + at the end (DracoArm+).",
	"kinetic converter":"Kinetic Converter: Increases Mobility! Reduces Damage!",
	"juiced reserves":"Juiced Reserves: Power damage scales up with Energy! (Every 4 NRG = +1 PWR.)",
	"intensifier":"Intensifier: Charged attacks deal bonus damage! (+20% damage per charge level.)",
	"hypersash":"Hypersash: Increases speed by a lot! Gotta go REAL FAST. (+5 SPD.)",
	"hoarder's might":"Hoarder's Might: Nutholding increases damage! (20 nuts = 1 ATK 1 PWR.)",
	"hoarders might":"Hoarder's Might: Nutholding increases damage! (20 nuts = 1 ATK 1 PWR.)",
	"heart container":"Heart Container: Max health +2.",
	"health nut":"Health Nut: Nuts sometimes restore 1 health. (10% chance on regular nut, 50% chance on golden nut. Stackable.)",
	"glass cannon":"Glass Cannon: Gain damage and squishiness! (-2 Max Health, +2 ATK, +2 PWR.)",
	"gapminder":"Gapminder: Prevents fall damage.",
	"fortune stabilsier":"Fortune Stabilsier: Shops and slots always spawn! Starts next level. ",
	"forgotten memento":"Forgotten Memento: .+3 Power Damage. Let nuts fuel your rage. (When energy is 0, powers cast for 2 nuts per required NRG.)",
	"force resonator":"Force Resonator: Increases the effects of equipped Arm Cores. To view effects on specific Core Augs search for the Core with a + at the end (DracoArm+).",
	"forcemetal shell":"Forcemetal Shell: Boosts health and attack damage; costs speed. (+2 Max Health, +2 ATK, -2 SPD.)",
	"entropy lock":"Entropy Lock: Starting next level, Slot Machines love you.",
	"energy scavenger":"Energy Scavenger: Enemies drop more energy.",
	"enerative plating":"Enerative Plating: MAX NRG at level start!",
	"deconstructor's might":"Deconstructor's Might: Deconstructor online! Defeated enemies explode, dealing 12 damage to other nearby enemies.",
	"dashbolt":"Dashbolt: Dashing fires a powerful Blast! (Damage = 3x SPD + 15.)",
	"crisis timestopper":"Crisis Timestopper: Freeze all foes when a hit knocks you into red HP.",
	"crisis overdrive":"Crisis Overdrive: While in red HP, your abilities are greatly increased. (+3 ATK, +3 PWR, +4 JMP, +4 SPD when health is red.)",
	"crisis lifebank":"Crisis Lifebank: Store extra health for when you need it most. Picks up health drops and when player health becomes red, explodes to release half the health it had stored.",
	"cranial resonator":"Cranial Resonator: Increases the effects of equipped Head Cores. To view effects on specific Core Augs search for the Core with a + at the end (DracoArm+).",
	"contractor plus":"Contractor Plus: All stats up! (+1 Max Health, +1 Max NRG, +1 ATK, +1 PWR +1 SPD, +1 JMP.)",
	"contractor omega":"Contractor Omega: All stats WAY up! (+3 Max Health, +3 Max NRG, +3 ATK, +3 PWR +3 SPD, +3 JMP.)",
	"choicebooster":"Choicebooster: Shops contain an additional item.",
	"charging magnet":"Charging Magnet: Charging draws in pickups!",
	"charged nuts":"Charged Nuts: Nuts sometimes restore 1 energy. (10% chance on regular nut, guaranteed on golden nut. Stackable.)",
	"case resonator":"Case Resonator: Increases the effects of equipped Body Cores. To view effects on specific Core Augs search for the Core with a + at the end (DracoArm+).",
	"brain food lunch":"Brain Food Lunch: Max HP +2! Max NRG +4! Also, full NRG.",
	"bracer of battle":"Bracer of Battle: Basic attacks deal *much* more damage. (+5 ATK.)",
	"boltdash":"Boltdash: Complete dashes more quickly! (Dash speed increased by 25%.)",
	"blue lander":"Blue Lander: Max health +1! Also, full health.",
	"band of might":"Band of Might: Basic attacks deal more damage. (+2 ATK.)",
	"armorative plating":"Armorative Plating: +2 Armor at level start!",
	"armor spreader":"Armor Spreader: Armor capsules are worth 1 more armor.",
	"armor scavenger":"Armor Scavenger: Enemies drop more armor!",
	"armor nut":"Armor Nut: Nuts sometimes also give 1 armor. (10% chance on regular nut, 33% chance on golden nut. Stackable.)",
	"armor bloom":"Armor Bloom: Grants 6 armor. Spreadable. (Applies to most sources of incoming armor.)",
	"armorall":"Armorall: Grants speed, energy, and armor. (+3 Armor, +1 Max NRG, +1 SPD.)",
	"brutish augmentation":"Brutish Augmentation: Cast your powers aside, Embrace your primal power. (+50% ATK damage. Max NRG set to 0. Powers disabled.)",
	"consuming fury":"Consuming Fury: The flame that shines brightest... (+2 ATK, +2 PWR, -2 Max HP every level.)",
	"earthmetal plating":"Earthmetal Plating: Become one with the planet. May reduce output. ATK and PWR reduced to 0. Gain 1 Max Health and 1 Max NRG per lost (ATK+PWR).",
	"final shell":"Final Shell: Incredible protection shields the frailest core. Max Health set to 1, gain 2 Armor per Max Health lost.",
	"focusing sagelens":"Focusing Sagelens: Unlock true wisdom. Set aside your savage nature. (+100% PWR damage. ATK set to -18.)",
	"interesting times":"Interesting Times: Ebb and flow with the times... Randomly increases and decreases 2 stats at level start.",
	"sanity converter":"Sanity Converter: Powers consume maximum energy and deal immense damage (+100% PWR damage. Each cast grants +1 PWR and -1 Max NRG.)",
	"uncharging force":"Uncharging Force: Gain incredible strength. Never hold it in again. (+7 ATK, Charging disabled)",
	"violence enhancer":"Violence Enhancer: Damage massively increased. For everyone. (+5 ATK, +5 PWR. Incoming damage is doubled.)",
	"defiant decree":"Defiant Decree: Bosses gain +50% HP and grant 2 chests.",
	"zookeeper's burden":"Zookeeper's Burden: All attacking and Powers disabled. Gain one of each Repro.",
	"contractor beta":"Contractor Beta: Boosts all your abilities. Stay healthy, friend. (+2 to Max Health, Max NRG, ATK, PWR, SPD, JMP. Damage scales with health, from 120% at full health to 30% at 0 health.)",
	"kingseeker":"Kingseeker: Boss kills heal to full. No other healing.",
	"hysteria":"Hysteria: Uncontrollable Power. Picking up future Augs grants 2x when possible (Once Per Run Augs cannot stack). Incoming damage is tripled.",
	"vitality partitioner":"Vitality Partitioner: Optimally partitions your vitality. Max Health halved. Gain 3 Max NRG per Max Health lost.",
	"patchwork integrator":"Patchwork Integrator: Give of yourself, and become the Tapestry. Reduces the Core Aug requirement for a set bonus by 2. Damage reduced by 40%.",
	"n-buster":"N-Buster: Nina's starting weapon. (Damage = ATK x 1). Charging deals double damage.",
	"forkalator":"Forkalator: Triangle shot! Forkalicious. (Damage per shot = ATK x 0.8, 0.2x per extra multihit.) Charging deals double damage.",
	"star beam":"Star Beam: Shoot in all four cardinal directions. (Damage per shot = ATK x 0.8, 0.2x per extra multihit.) Charging deals double damage.",
	"scatterblast":"Scatterblast: Hyperparticles devastate targets up close! (Damage per shot = ATK x 0.4) Charging deals increased damage and adds more projectiles.",
	"wave beam":"Wave Beam: Megaparticles pierce foes and walls! Also, wavy. (Damage per shot = ATK x 1) Charging deals double damage.",
	"a-saber":"A-Saber: Ace's starting weapon. Has a 3 hit combo, dealing ATK x 1.2, ATK x 1.2, and ATK x 2.0. Second and third hits reduced against bosses (1.2x, 0.9x, 1.5x.) Charge damage 2x on first swing only.",
	"sharp sharp spear":"Sharp Sharp Spear: Grants additional damage and reach! Has a 2 hit combo, dealing ATK x 1.5 and ATK x 1.8. Charge damage 1.5x on first hit only.",
	"plasma blender":"Plasma Blender: Shreds enemies up-close! Damage = ATK x 1. Consecutive hits increase in size and in damage. Has reduced invulnerability frames against bosses.",
	"spinning glaive":"Spinning Glaive: Circle Slash while airborne! Has a 2 hit combo dealing ATK x 1.4 for both hits. Can combo an Aerial slash into a ground combo to deal ATK x 1.4 (aerial), ATK x 1.6 (first ground hit), ATK x 2.1 (second ground hit). Charge damage 2x on first hit only.",
	"rippling axe":"Rippling Axe: Swings slowly for MASSIVE damage! Has a 2 hit combo dealing ATK x 2.5 and ATK x 3.75. When used in the air deals ATK x 1.875, counts as charged, and slams the user to the ground. Aerial attack can be cancelled with Core Legs or pressing the attack button.",
	"crippling axe":"CRippling Axe: Legend has it there will come a day when the might of the Axe will shine instead of feeling awkward and bad.",
	"the siphon":"The Siphon: Recalls energy from the unworthy. Has a 2 hit combo dealing ATK x 1 for both hits. The second hit of the combo will regenerate 1 NRG. Pierces, can hit multiple enemies at the same time. Charge damage 1.5x and recovers NRG.",
	"protorifle":"Protorifle: Fires inefficiently, slowly, and poorly. (Damage = PWR x 0.7 against regular enemies, PWR x 0.42 against bosses.)",
	"seeking striker":"Seeking Striker: Locates your enemies, then blows them up! (Damage = PWR x 2.)",
	"blastjump":"Blastjump: Explode to new heights! (Damage = JMP x 3.) Boosts Hawk into the air on use.",
	"wildfire":"Wildfire: Combusts into a ground-seeking line of death! (Damage = PWR x 4 for the initial flask, and PWR x 3 for the flames)",
	"world igniter":"World Igniter: Leave nothing by ashes! (Damage = PWR x 2 against normal enemies, PWR x 1 against bosses.) Fires extremely fast, requires 1 NRG for 2 flames.",
	"unstoppable force":"Unstoppable Force: Convert your foes to dust! Has a 2 hit combo dealing ATK x 2 and ATK x 3. Charged damage x 2 and produces a rising uppercut.",
	"volt edge":"Volt Edge: Truly shocking. Throws a boomerang (Damage = ATK x 0.8). Charged damage +150%. Charged projectiles stun enemies.",
	"vega":"Vega: Embrace the sharp shadow! Has a 3 hit combo dealing ATK x 1.8 for all attacks. Charged damage x 2 and causes Draco to dash forward with temporary invincibility.",
	"peacebringer":"Peacebringer: Be still, and reflect. Has a 3 hit combo dealing ATK x 1 for all swings. Charged damage x 1.5 and reflects projectiles back at enemies (for broken amounts of damage).",
	"gemini":"Gemini: Fire auto-aiming twin arrows! Projectile dealing ATK x 0.5 per hit. Shots auto aim at the nearest enemy in 45 degree increments. Charged damage x 2 and if it kills an enemy it will seek a next enemy.",
	"rapture":"Rapture: It's a bubble! Projectile dealing ATK x 1.2, fires in an arc. Charged damage x 1.5 and creates a moving platform.",
	"boomerang blade":"Boomerang Blade: Drops from Rollster. Weakness of Death Lotus. Fires a Boomerang dealing PWR x 2 per hit, can hit up to 3x against bosses, more against normal enemies. Refunds NRG cost if used to collect pickups.",
	"flameshield":"Flameshield: Drops from Astral Twins. Weakness of Rollster. Spawns 4 fireballs around the player that deal PWR x 2 and block projectiles. Removes Icicle projectiles without breaking.",
	"mortar":"Mortar: Drops from Death Lotus. Weakness of Vile Visage. Fires a shield and enemy piercing, arcing projectile that deals PWR x 4 on contact and then explodes to deal 40 damage to nearby enemies.",
	"force nova":"Force Nova: Drops from Vile Visage. Weakness of Eternal Star. Releases a shockwave around the player, dealing PWR x 3 to enemies and destroying projectiles. Can disable laser grids.",
	"shadespur":"Shadespur: Drops from Eternal Star. Weakness of Perforator. Fires a piercing crystal which travels at 2x the players current speed when fired. Deals PWR x 2 damage to enemies. Locks the disappearing blocks in place.",
	"quint laser":"Quint Laser: Drops from Kur. Weakness of Shatterbeak. Launches a large square of light dealing PWR x 5 on contact. Can be held to charged up to 2 levels, damage increasing by 50% each level. Max level Quint can knock over vending machines.",
	"splinterfrost":"Splinterfrost: Drops from Shatterbeak. Weakness of Astral Twins. Fires an ice crystal that deals PWR x 4 and splinters on contact, each splinter dealing PWR x 2. When fired from the correct angle, can hit bosses with both the crystal and a splinter. Freezes flame turrets.",
	"vera":"Vera: Drops from Perforator. Weakness of Kur. Rapidly fires projectiles dealing PWR x 0.6 to normal enemies and PWR x 0.3 to bosses. Can be aimed upwards or downwards. When fired downwards the player can fly using this. Reflects Quint Lasers.",
	"hawkward":"Hawkward: That moment you realize you're the worst character in the game.",
	"armatort's dome":"Armatort's Dome: Core (Head): Health pickups might grant armor! Also a small chance to heal 1 health when armor is picked up. \nCranial Resonator Effect: Health/armor grant is increased by 1.",
	"armatort's shell":"Armatort's Shell: Core (Body): Grants immunity to knockback when taking damage. \nCase Resonator Effect: 50% chance to avoid taking damage entirely when you have armor.",
	"armatort's pound":"Armatort's Pound: Core (Arms): Your charged attacks vaporize enemy projectiles. Grants +2 ATK and +2 PWR while equipped. \nForce Resonator Effect: All attacks remove projectiles.",
	"armatort's momentum":"Armatort's Momentum: Core (Legs): Tap Jump while in midair to begin a 2 second hover! Limited to horizontal movement. Tap Jump again to cancel. \nKinetic Resonator Effect: Hover speed is doubled.",
	"armatort, the unstoppable":"Armatort, the Unstoppable: Set Bonus: Invulnerability from lasers, spikes, and lava. Projectiles (Fire and Icicle shooters included) will still harm the player.",
	"dracopent's fang":"Dracopent's Fang: Core (Head): Charging up boosts your next attack too! Whenever you fire a charged attack, your next attack will also be charged. Draco gains 1 extra Dracocharge. If attack is a combo, the charge only applies to the first hit of the combo. \nCranial Resonator Effect: Stored charge shots increases to 2. Draco gains 2 Dracocharges.",
	"dracopent's pride":"Dracopent's Pride: Core (Body): Attack kills might restore health! 8% chance on killing an enemy to restore 1 health. Chance is tied to seed, re-running will always give the same result. \nCase Resonator Effect: Healing on proc increased to 2 health.",
	"dracopent's claw":"Dracopent's Claw: Core (Arms): Charge your attacks even chargier! Attacks can be charged to a second charge level (taking 1 additional second to charge and dealing 3x uncharged damage.) Grants +4 ATK while equipped. Draco gains an Ultracharge when his Dracocharges are full. \nForce Resonator Effect: Charged attacks are replaced with Ultracharged attacks. Synergizes well with Dracopent's Fang.",
	"dracopent's bound":"Dracopent's Bound: Core (Legs): Double Jump! Effect boosted with JMP stat. \nKinetic Resonator Effect: Triple jump!",
	"dracopent, the foul":"Dracopent, the Foul: Set Bonus: All regular shots are instead charged shots. Draco gains +3 Dracocharges.",
	"owlhawk's focus":"Owlhawk's Focus: Core (Head): 50% of Powers cast FREE! \nCranial Resonator Effect: Chance to cast a free power increased to 75%",
	"owlhawk's reign":"Owlhawk's Reign: Core (Body): Power kills have a 10% chance to restore 1 health. Chance is tied to seed, re-running will always give the same result. \nCranial Resonator Effect: Healing on proc increased to 2.",
	"owlhawk's talon":"Owlhawk's Talon: Core (Arms): Primary weapon attacks have a 15% chance to restore 1 NRG. Grants +4 PWR while equipped. Hawk gains the ability to restore NRG on the first combo swing. \nForce Resonator Effect: NRG on proc increased to 2.",
	"owlhawk's feather":"Owlhawk's Feather: Core (Legs): Press Jump while midair to fly for 1 second. Press Jump again to cancel. \nKinetic Resonator Effect: Flight speed doubled.",
	"owlhawk, the wise":"Owlhawk, the Wise: Set Bonus: All powers become Juiced Powers, with special additional effects.",
	"oxjack's ken":"Oxjack's Ken: Core (Helm): Dashbolt active! Dashing fires a projectile that pierces. (Damage = SPD x 3 + 15.) Projectiles ignore iframes. \nCranial Resonator Effect: Fires 3 projectiles.",
	"oxjack's guile":"Oxjack's Guile: Core (Body): Dashing grants a shield! When dashing a shield appears in the direction you dash, blocking projectiles. \nCase Resonator Effect: When shield hits a projectile it relaliates with 5 small projectiles.",
	"oxjack's fury":"Oxjack's Fury: Core (Arms): Charge time reduced by 25%. +2 ATK/PWR while equipped. Does not affect Quint Laser charging. \nForce Resonator Effect: Increases the reduction in charging time.",
	"oxjack's blitz":"Oxjack's Blitz: Core (Legs): 4-way dash in midair! Cannot change direction during dash. \nKinetic Resonator Effect: Grants an extra dash.",
	"oxjack, the flash":"Oxjack, the Flash: Set Bonus: Grants two 4-way dashes in midair!"
};

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = { 
  "token"  : "NDcyMTQwNTk5MTU2Mjc3MjQ4.DjvFvQ.QttM4lwyq9T5tBd2TVo6zFYE8OA",
  "prefix" : "?"
};

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity("you || " + config.prefix + "help", {type: 'WATCHING'});
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  //client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  //client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

//Error handling so the client doesn't crash
client.on("error", (err) => {
  console.error('whoops! there was an error');
});

client.on("message", message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "info") 
  {
	let searchParam = args.join(" ").toLowerCase();
	
	let syn = alternameNames[searchParam];
	
	if(syn)
	{
		searchParam = syn;
		//console.log("Found alternate name for " + [searchParam] + ": " + syn);
	}
	
	let result = dataloreInfo[searchParam];
	
	if (!result)
	{
		message.channel.send("That Aug does not exist!");
	}
	else
	{
		message.channel.send(result);
	}
	  
  }
  
  if(command === "help")
  {
	  message.channel.send("Hi I'm Datalore! I can give you information about 20XX Augs and Repros, just use " + config.prefix + "info <Aug Name>");
  }
  
});

client.login(config.token);
