ServerEvents.tags("fluid",event=>{
    event.remove("forge:crude_oil",['ad_astra:oil']);
    event.remove("forge:crude_oil",['createindustry:crude_oil']);
})

ServerEvents.recipes(event=>{
    event.remove({output:'irons_spellbooks:nature_rune'})
    event.remove({output:'immersiveengineering:alloybrick'})
    event.remove({type:'smelting',output:'minecraft:iron_ingot'})
    event.remove({type:'blasting',output:'minecraft:iron_ingot'})
    event.remove({type:'blasting',output:'#forge:ingots/nickel'})
    event.remove({type:'smelting',output:'#forge:ingots/nickel'})
    event.remove({output:'ad_astra:space_suit'})
    event.remove({output:'ad_astra:space_helmet'})
    event.remove({output:'ad_astra:space_pants'})
    event.remove({output:'ad_astra:space_boots'})
    event.remove({output:'refinedstorage:64k_fluid_storage_part'})
    event.remove({output:'refinedstorage:256k_fluid_storage_part'})
    event.remove({output:'refinedstorage:1024k_fluid_storage_part'})
    event.remove({output:'refinedstorage:4096k_fluid_storage_part'})
    event.remove({type:'blasting',input:'minecraft:iron_ingot'})
    event.remove({output:'mekanism:hdpe_pellet'})
    event.remove({output:'irons_spellbooks:ice_rune'})
    event.remove({input:'industrialforegoing:dryrubber'})
    event.remove({output:'mekanism:basic_universal_cable'})
    event.remove({output:'mekanism:metallurgic_infuser'})
    event.remove({type:'blasting',output:'minecraft:iron_block'})
    event.remove({type:'smelting',output:'minecraft:iron_block'})
    event.remove({output:'industrialforegoing:machine_frame_pity'})
    event.remove({output:'refinedstorage:machine_casing'})
    event.remove({output:'refinedstorage:controller'})
    event.remove({output:'ad_astra:cryo_freezer'})
    event.remove({input:'minecraft:iron_ingot',output:'minecraft:iron_block'})
    event.remove({output:'minecraft:blast_furnace'})
    event.remove({output:'fluxnetworks:flux_core'})
    event.remove({output:'ad_astra:steel_engine'})
    event.remove({output:'ad_astra:coal_generator'})
    event.remove({output:'mythicbotany:alfsteel_pylon'})
    event.remove({output:'ad_astra:steel_tank'})
    event.remove({output:'refinedstorage:1k_storage_part'})
    event.remove({input:'mekanism:bio_fuel'})
    event.remove({output:'refinedstorage:16k_storage_part'})
    event.remove({output:'mythicbotany:mana_infuser'})
    event.remove({output:'immersiveengineering:blueprint'})
    event.remove({output:'minecraft:anvil'})
    event.remove({output:'industrialforegoing:dissolution_chamber'})
    event.remove({output:'refinedstorage:advanced_processor'})
    event.remove({output:'irons_spellbooks:nature_upgrade_orb'})
    event.remove({output:'botania:twig_wand'})
    event.remove({output:'refinedstorage:silicon'})
    event.remove({output:'ad_astra:solar_panel'})
    event.remove({output:'refinedstorage:quartz_enriched_iron'})
    event.remove({output:'botania:mana_pylon'})
    event.remove({output:'refinedstorage:4k_storage_part'})
    event.remove({output:"ad_astra:hammer"})
    event.remove({output:'mekanism:elite_control_circuit'})
    event.remove({output:'ad_astra:desh_tank'})
    event.remove({output:'createindustry:blast_furnace_output'})
    event.remove({output:'mekanism:ultimate_control_circuit'})
    event.remove({output:'mekanism:energy_tablet'})
    event.remove({output:'ad_astra:desh_engine'})
    event.remove({output:'ad_astra:rocket_nose_cone'})
    event.remove({output:'twilightforest:uncrafting_table'})
    event.remove({output:'refinedstorage:raw_advanced_processor'})
    event.remove({output:'mekanism:ingot_osmium',type:'smelting'})
    event.remove({output:'mekanism:ingot_osmium',type:'blasting'})
    event.remove({input:'ad_astra:hammer'})
    event.remove({output:'mekanism:advanced_control_circuit'})
    event.remove({output:'industrialforegoing:pitiful_generator'})
    event.remove({output:'botania:alchemy_catalyst'})
    event.remove({output:'integrateddynamics:cable'})
    event.remove({output:'create:steam_engine'})
    event.remove({output:'mekanism:digital_miner'})
    event.remove({output:'ad_astra:cryo_freezer'})
    event.remove({output:'create:precision_mechanism'})
    event.remove({output:'create:mechanical_crafter'})
    event.remove({output:'ad_astra:compressor'})
    event.remove({output:'immersiveengineering:blastbrick'})
    event.remove({output:'botania:manasteel_ingot'})
    event.remove({output:'botania:natura_pylon'})
    event.remove({output:'tacz:gun_smith_table'})
    event.remove({output:'refinedstorage:64k_storage_part'})
    event.remove({output:'irons_spellbooks:cinder_essence'})
    event.remove({output:'integrateddynamics:coal_generator'})
    event.remove({output:'immersiveengineering:wooden_grip'})
    event.remove({output:'immersiveengineering:dynamo'})
    event.remove({output:'immersiveengineering:thermoelectric_generator'})
    event.remove({output:'rsinfinitybooster:dimension_card'})
    event.remove({output:'immersiveengineering:generator'})
    event.remove({output:'irons_spellbooks:upgrade_orb'})
    event.remove({output:'irons_spellbooks:holy_upgrade_orb'})
    event.remove({output:'ad_astra:ostrum_engine'})
    event.remove({output:'ad_astra:ostrum_tank'})
    event.remove({input:'createindustry:concrete_mixture'})
    event.remove({output:'mekanismgenerators:heat_generator'})
    event.remove({input:'createindustry:steel_mechanism'})
    event.remove({output:'create:mechanical_arm'})
    event.remove({type:'smelting',output:'minecraft:charcoal'})
    event.remove({output:'create:wrench'})
    event.remove({output:'industrialforegoing:mob_slaughter_factory'})
    event.remove({output:'ad_astra:nasa_workbench'})
    event.remove({output:'immersiveengineering:craftingtable'})
    event.remove({input:'mythicbotany:dragonstone_ore'})
    event.remove({output:'irons_spellbooks:upgrade_orb'})
    event.remove({output:'irons_spellbooks:evocation_rune'})
    event.remove({output:'create:deployer'})
    event.remove({output:'immersiveengineering:generator'})
    event.remove({output:'integrateddynamics:variable'})
    event.remove({output:'create:goggles'})
    event.remove({output:'thirstcanteen:military_bottle'})
    event.remove({output:'industrialforegoing:machine_frame_simple'})
    event.remove({output:'irons_spellbooks:arcane_anvil'})
    event.remove({output:'immersiveengineering:cokebrick'})
    event.remove({output:'botania:alfheim_portal'})
    event.remove({output:'immersiveengineering:hammer'})
    event.remove({output:'botania:elementium_ingot',type:'smelting'})
    event.remove({output:'botania:elementium_ingot',type:'blasting'})
    event.remove({input:'#forge:gems/diamond',output:'#forge:tools'})
    event.remove({input:'#forge:gems/diamond',output:'#forge:armors'})
    event.remove({output:'thirstcanteen:dragon_bottle'})
    event.remove({not:{input:'minecraft:white_bed'},output:'#minecraft:beds'})
    event.remove({output:'botania:terra_plate'})
    event.remove({output:'ad_astra:fuel_refinery'})
    event.remove({output:'immersiveengineering:sample_drill'})
    event.remove({output:'immersivepetroleum:seismic_survey'})
    event.shaped('minecraft:white_bed',[
        'YYW',
        'BBB',
        'MMM'
    ],{
        B:'farmersdelight:canvas',
        Y:'supplementaries:feather_block',
        W:'#minecraft:wool',
        M:'#minecraft:planks'
    })
    event.shaped('immersivepetroleum:seismic_survey',[
        'GQJ',
        'GQG',
        'GYG'
    ],{
        Q:'immersiveengineering:gunpart_barrel',
        Y:'botania:life_essence',
        G:'immersiveengineering:steel_scaffolding_standard',
        J:'immersiveengineering:gunpart_hammer'
    })
    event.shaped('industrialforegoing:machine_frame_pity',[
        'MYM',
        'YHY',
        'MYM'
    ],{
        H:'minecraft:redstone_block',
        Y:'botania:elementium_ingot',
        M:'#byg:all/logs'
    })
    event.shaped('irons_spellbooks:nature_rune',[
        'FFF',
        'FWF',
        'FFF'
    ],{
        W:'irons_spellbooks:blank_rune',
        F:'#botania:petals'
    })
    event.shapeless(Item.of('createindustry:fireclay_ball',3),['minecraft:clay_ball','#forge:gravel','#forge:sand'])
    event.shapeless('createindustry:fireclay_ball','createindustry:fireclay')
    event.shapeless('mekanism:canteen','thirstcanteen:military_bottle')
    event.shapeless('immersiveengineering:thermoelectric_generator',['immersiveengineering:generator','irons_spellbooks:fire_rune','irons_spellbooks:ice_rune'])
    event.shapeless(Item.of('immersiveengineering:cokebrick',3),['createindustry:fireproof_bricks','createindustry:cement','minecraft:deepslate_bricks'])
    event.shapeless(Item.of('immersiveengineering:cokebrick',10),['createindustry:fireproof_bricks','createindustry:fireproof_bricks','createindustry:fireproof_bricks',
    'createindustry:cement','createindustry:cement','createindustry:cement'
    ,'minecraft:deepslate_bricks','minecraft:deepslate_bricks','minecraft:deepslate_bricks'])
    event.recipes.botania.mana_infusion("immersiveengineering:alloybrick","createindustry:fireproof_bricks", 0.5)
    event.recipes.botania.terra_plate("botania:mana_pylon",
        ["byg:subzero_crystal_shard","byg:subzero_crystal_shard",
        'immersiveengineering:ingot_electrum','immersiveengineering:ingot_electrum',
        'botania:manasteel_ingot','botania:mana_diamond','botania:mana_diamond'
        ],4000)
    event.recipes.botania.terra_plate("botania:natura_pylon",
    ['botania:terrasteel_nugget','botania:terrasteel_nugget',
    'botania:terrasteel_nugget','irons_spellbooks:nature_upgrade_orb','botania:mana_pylon'
    ],10000)
    event.shapeless(Item.of('createindustry:fireclay_ball',10),['minecraft:clay_ball','minecraft:clay_ball','minecraft:clay_ball'
    ,'#forge:gravel','#forge:gravel','#forge:gravel','#forge:sand','#forge:sand','#forge:sand'])
    event.shapeless('createindustry:fireproof_bricks',['createindustry:fireproof_brick','createindustry:fireproof_brick','createindustry:fireproof_brick','createindustry:fireproof_brick'])
    event.shaped('minecraft:blast_furnace',[
        'NNN',
        'NRN',
        'SSS'
    ],{
        S:'#forge:cobblestone',
        N:'createindustry:fireproof_bricks',
        R:'minecraft:furnace'
    })
    event.shaped('immersiveengineering:hammer',[
        ' IM',
        ' SI',
        'S  '
    ],{
        S:'#forge:rods/wooden',
        M:'botania:mana_string',
        I:'#forge:plates/iron'
    })
    event.shaped('refinedstorage:64k_fluid_storage_part',[
        'LLL',
        'LHL',
        'LLL'
    ],{
        L:'create:fluid_tank',
        H:'refinedstorage:1k_storage_part'
    })
    event.shaped('refinedstorage:256k_fluid_storage_part',[
        'LLL',
        'LHL',
        'LLL'
    ],{
        L:'create:fluid_tank',
        H:'refinedstorage:4k_storage_part'
    })
    event.shaped('refinedstorage:1024k_fluid_storage_part',[
        'LLL',
        'LHL',
        'LLL'
    ],{
        L:'create:fluid_tank',
        H:'refinedstorage:16k_storage_part'
    })
    event.shaped('refinedstorage:4096k_fluid_storage_part',[
        'LLL',
        'LHL',
        'LLL'
    ],{
        L:'create:fluid_tank',
        H:'refinedstorage:64k_storage_part'
    })
    event.smelting('createindustry:fireproof_brick','createindustry:fireclay_ball',200,20*5)
    event.blasting('minecraft:iron_ingot','#forge:ores/iron',200,20*30)
    event.blasting('minecraft:iron_ingot','minecraft:raw_iron',200,20*30)
    event.blasting('minecraft:iron_ingot','#forge:dusts/iron',200,20*30)
    event.smithing('botania:twig_wand','botania:livingwood_twig','irons_spellbooks:nature_rune')
    event.smithing('irons_spellbooks:evocation_rune','irons_spellbooks:blank_rune','minecraft:emerald')
    event.smithing('irons_spellbooks:blank_rune','create:andesite_alloy','irons_spellbooks:arcane_ingot')
    event.smithing('irons_spellbooks:nature_upgrade_orb','irons_spellbooks:upgrade_orb','irons_spellbooks:nature_rune')
    event.smithing('ad_astra:nasa_workbench','immersiveengineering:craftingtable','mekanism:pellet_antimatter')
    event.smithing('refinedstorage:controller','refinedstorage:machine_casing','refinedstorage:advanced_processor')
    event.smithing('create:deployer','create:andesite_casing','create:brass_hand')
    event.smithing(Item.of('minecraft:diamond_pickaxe', '{Damage:0}'),'minecraft:iron_pickaxe','mekanism:dust_diamond')
    event.smithing('irons_spellbooks:holy_upgrade_orb','irons_spellbooks:upgrade_orb','irons_spellbooks:holy_rune')
    event.smithing('irons_spellbooks:ice_rune','irons_spellbooks:blank_rune','minecraft:blue_ice')
    event.smithing('immersiveengineering:dynamo','immersiveengineering:generator','create:sequenced_gearshift')
    event.smithing('rsinfinitybooster:dimension_card','rsinfinitybooster:infinity_card','mekanism:pellet_antimatter')
    event.smithing(Item.of('ad_astra:netherite_space_helmet', '{Damage:0}'),'ad_astra:space_helmet','#forge:ingots/netherite')
    event.smithing(Item.of('ad_astra:netherite_space_suit', '{BotariumData:{},Damage:0}'),'ad_astra:space_suit','#forge:ingots/netherite')
    event.smithing(Item.of('ad_astra:netherite_space_pants', '{Damage:0}'),'ad_astra:space_pants','#forge:ingots/netherite')
    event.smithing(Item.of('ad_astra:netherite_space_boots', '{Damage:0}'),'ad_astra:space_boots','#forge:ingots/netherite')
    event.recipes.immersiveengineering.metal_press('industrialforegoing:diamond_gear','minecraft:diamond','immersiveengineering:mold_gear', 600)
    event.recipes.immersiveengineering.arc_furnace('botania:elementium_ingot','mythicbotany:raw_elementium','irons_spellbooks:arcane_essence')
    event.recipes.immersiveengineering.arc_furnace(['botania:dragonstone','botania:pixie_dust'],'mythicbotany:dragonstone_ore','').time(20*15)
    event.recipes.immersiveengineering.arc_furnace('refinedstorage:silicon','minecraft:quartz','createindustry:limesand').time(20*6)
    event.recipes.immersiveengineering.blueprint('industrialforegoing:pitiful_generator', ['createindustry:heavy_plate','#industrialforegoing:machine_frame/pity','immersiveengineering:component_steel'], 'components')
    event.shapeless('irons_spellbooks:arcane_essence',['#farmersdelight:tools/knives','#botania:petals']).damageIngredient({tag:'#farmersdelight:tools/knives'},2)
    event.recipes.create.milling(['irons_spellbooks:arcane_essence',Item.of('irons_spellbooks:arcane_essence').withChance(0.5)],'#botania:petals')
    event.recipes.create.filling('integrateddynamics:variable',['create:zinc_nugget',Fluid.of('integrateddynamics:menril_resin',40)])
    event.recipes.create.compacting('industrialforegoing:plastic',Fluid.of('immersivepetroleum:ethylene',200),20*5)
    event.recipes.create.crushing(Item.of('create:crushed_raw_iron').withChance(0.10),'ad_astra:mars_sand').processingTime(20*5)
    const incomplete = 'create:incomplete_precision_mechanism'
    const incomplete_wrench = 'techrevival:incomplete_wrench'
    event.recipes.create.sequenced_assembly(
        [Item.of("create:wrench").withChance(100.0)],
        'minecraft:stick',[
        event.recipes.create.deploying(incomplete_wrench,[incomplete_wrench,'create:cogwheel']),
        event.recipes.create.deploying(incomplete_wrench,[incomplete_wrench,'create:brass_sheet'])
        ])
        .transitionalItem(incomplete_wrench).loops(3)
    const incomplete_arcane_anvil = 'techrevival:incomplete_arcane_anvil'
    event.recipes.create.sequenced_assembly([Item.of("irons_spellbooks:arcane_anvil").withChance(0.9),
         Item.of("minecraft:anvil").withChance(0.1)],
         'minecraft:anvil',[
        event.recipes.create.deploying(incomplete_arcane_anvil,[incomplete_arcane_anvil,'irons_spellbooks:fire_rune']),
        event.recipes.create.deploying(incomplete_arcane_anvil,[incomplete_arcane_anvil,'minecraft:amethyst_block']),
        event.recipes.create.deploying(incomplete_arcane_anvil,[incomplete_arcane_anvil,'minecraft:amethyst_block']),
        event.recipes.create.deploying(incomplete_arcane_anvil,[incomplete_arcane_anvil,'minecraft:amethyst_block']),
        event.recipes.create.deploying(incomplete_arcane_anvil,[incomplete_arcane_anvil,'botania:mana_diamond']),
        event.recipes.create.pressing(incomplete_arcane_anvil,incomplete_arcane_anvil)
        ])
        .transitionalItem(incomplete_arcane_anvil).loops(1)
    const incomplete_steam_engine = 'techrevival:incomplete_steam_engine'
    event.recipes.create.sequenced_assembly(
        [Item.of("create:steam_engine").withChance(100.0)],
        'minecraft:copper_block',[
        event.recipes.create.deploying(incomplete_steam_engine,[incomplete_steam_engine,'botania:manasteel_ingot']),
        event.recipes.create.filling(incomplete_steam_engine,[incomplete_steam_engine,Fluid.of('immersiveengineering:creosote',1000)]),
        event.recipes.create.deploying(incomplete_steam_engine,[incomplete_steam_engine,'create:golden_sheet']),
        event.recipes.create.pressing(incomplete_steam_engine,incomplete_steam_engine)
        ])
        .transitionalItem(incomplete_steam_engine).loops(4)
    const incomplete_upgrade_orb = 'techrevival:incomplete_upgrade_orb'
    event.recipes.create.sequenced_assembly(
        [Item.of('irons_spellbooks:upgrade_orb').withChance(100.0)],
        'botania:rune_mana',[
        event.recipes.create.deploying(incomplete_upgrade_orb,[incomplete_upgrade_orb,'irons_spellbooks:cinder_essence']),
        event.recipes.create.deploying(incomplete_upgrade_orb,[incomplete_upgrade_orb,'irons_spellbooks:arcane_ingot']),
        ])
        .transitionalItem(incomplete_upgrade_orb).loops(4)
    const incomplete_mechanical_crafter = 'techrevival:incomplete_mechanical_crafter'
    event.recipes.create.sequenced_assembly(
        [Item.of('create:mechanical_crafter').withChance(100.0)],
        'create:brass_casing',[
        event.recipes.create.deploying(incomplete_mechanical_crafter,[incomplete_mechanical_crafter,'botania:manasteel_nugget']),
        event.recipes.create.deploying(incomplete_mechanical_crafter,[incomplete_mechanical_crafter,'create:electron_tube']),
        event.recipes.create.deploying(incomplete_mechanical_crafter,[incomplete_mechanical_crafter,'minecraft:crafting_table'])
        ])
    .transitionalItem(incomplete_mechanical_crafter).loops(1)
    event.recipes.create.sequenced_assembly(
        [Item.of('create:precision_mechanism').withChance(0.8),
        Item.of('create:brass_sheet').withChance(0.2)],
        '#forge:plates/brass',[
        event.recipes.create.deploying(incomplete,[incomplete,'industrialforegoing:gold_gear']),
        event.recipes.create.deploying(incomplete,[incomplete,'industrialforegoing:iron_gear']),
        event.recipes.create.deploying(incomplete,[incomplete,'mekanism:nugget_steel'])
        ])
    .transitionalItem(incomplete).loops(3)
    const incomplete_cinder_essence = 'techrevival:incomplete_cinder_essence'
    event.recipes.create.sequenced_assembly(
        [Item.of('irons_spellbooks:cinder_essence').withChance(0.6),
        Item.of('irons_spellbooks:arcane_essence').withChance(0.4)],
        'irons_spellbooks:arcane_essence',[
        event.recipes.create.deploying(incomplete_cinder_essence,[incomplete_cinder_essence,'immersiveengineering:slag']),
        event.recipes.create.filling(incomplete_cinder_essence,[incomplete_cinder_essence,Fluid.of('minecraft:lava',500)]),
        event.recipes.create.pressing(incomplete_cinder_essence,incomplete_cinder_essence)
        ])
    .transitionalItem(incomplete_cinder_essence).loops(2)
    const incomplete_mechanical_arm = 'techrevival:incomplete_mechanical_arm'
    event.recipes.create.sequenced_assembly(
        [Item.of('create:mechanical_arm').withChance(0.8),
        Item.of('create:precision_mechanism').withChance(0.2)],
        'create:precision_mechanism',[
        event.recipes.create.deploying(incomplete_mechanical_arm,[incomplete_mechanical_arm,'immersiveengineering:component_iron']),
        event.recipes.create.deploying(incomplete_mechanical_arm,[incomplete_mechanical_arm,'industrialforegoing:gold_gear']),
        event.recipes.create.deploying(incomplete_mechanical_arm,[incomplete_mechanical_arm,'create:brass_casing'])
        ])
    .transitionalItem(incomplete_mechanical_arm).loops(3)
    const incomplete_goggles = 'techrevival:incomplete_goggles'
    event.recipes.create.sequenced_assembly(
        Item.of('create:goggles').withChance(100.0),
        'create:brass_sheet',[
        event.recipes.create.deploying(incomplete_goggles,[incomplete_goggles,'#forge:glass']),
        event.recipes.create.deploying(incomplete_goggles,[incomplete_goggles,'#forge:leather']),
        event.recipes.create.deploying(incomplete_goggles,[incomplete_goggles,'botania:mana_string']),
        event.recipes.create.pressing(incomplete_goggles,incomplete_goggles)
        ])
    .transitionalItem(incomplete_goggles).loops(2)
    const incomplete_military_bottle = 'techrevival:incomplete_military_bottle'
    event.recipes.create.sequenced_assembly(
        Item.of('thirstcanteen:military_bottle').withChance(100.0),
        'thirstcanteen:leather_canteen',[
        event.recipes.create.deploying(incomplete_military_bottle,[incomplete_military_bottle,'#forge:nuggets/steel']),
        event.recipes.create.deploying(incomplete_military_bottle,[incomplete_military_bottle,'#forge:glass_panes']),
        event.recipes.create.pressing(incomplete_military_bottle,incomplete_military_bottle)
        ])
    .transitionalItem(incomplete_military_bottle).loops(3)
    const incomplete_alfheim_portal = 'techrevival:incomplete_alfheim_portal'
    event.recipes.create.sequenced_assembly(
        Item.of('botania:alfheim_portal').withChance(100.0),
        '#botania:livingwood_logs',[
        event.recipes.create.deploying(incomplete_alfheim_portal,[incomplete_alfheim_portal,'minecraft:glow_berries']),
        event.recipes.create.filling(incomplete_alfheim_portal,[incomplete_alfheim_portal,Fluid.of('integrateddynamics:menril_resin',1000)]),
        event.recipes.create.deploying(incomplete_alfheim_portal,[incomplete_alfheim_portal,'botania:terrasteel_nugget'])
        ])
    .transitionalItem(incomplete_alfheim_portal).loops(3)
    const incomplete_crafting_table = 'techrevival:incomplete_crafting_table'
    event.recipes.create.sequenced_assembly([Item.of('immersiveengineering:craftingtable').withChance(100.0)],
    'minecraft:crafting_table',[
        event.recipes.create.deploying(incomplete_crafting_table,[incomplete_crafting_table,'immersiveengineering:treated_wood_horizontal']),
        event.recipes.create.filling(incomplete_crafting_table,[incomplete_crafting_table,Fluid.of('integrateddynamics:menril_resin',500)]),
        event.recipes.create.deploying(incomplete_crafting_table,[incomplete_crafting_table,'botania:elementium_nugget']),
        event.recipes.create.filling(incomplete_crafting_table,[incomplete_crafting_table,Fluid.of('immersiveengineering:creosote',500)]),
        event.recipes.create.deploying(incomplete_crafting_table,[incomplete_crafting_table,'immersiveengineering:component_steel'])
    ])
    .transitionalItem(incomplete_crafting_table).loops(5)
    const incomplete_blueprint = 'techrevival:incomplete_blueprint'
    event.recipes.create.sequenced_assembly(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}').withChance(100.0),
    '#forge:paper',[
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'#botania:petals/blue']),
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'#byg:biomepedia_crafting_material']),
        event.recipes.create.filling(incomplete_blueprint,[incomplete_blueprint,Fluid.of('immersiveengineering:redstone_acid',1000)]),
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'#forge:storage_blocks/aluminum']),
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'botania:manasteel_ingot']),
        event.recipes.create.pressing(incomplete_blueprint,incomplete_blueprint)
    ])
    .transitionalItem(incomplete_blueprint).loops(3)
    event.recipes.create.sequenced_assembly(Item.of('immersiveengineering:blueprint', '{blueprint:"bullet"}').withChance(100.0),
    '#forge:paper',[
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'#botania:petals/blue']),
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'#byg:biomepedia_crafting_material']),
        event.recipes.create.filling(incomplete_blueprint,[incomplete_blueprint,Fluid.of('immersiveengineering:redstone_acid',1000)]),
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'create:brass_block']),
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'botania:manasteel_ingot']),
        event.recipes.create.pressing(incomplete_blueprint,incomplete_blueprint)
    ])
    .transitionalItem(incomplete_blueprint).loops(3)
    event.recipes.create.sequenced_assembly(Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}').withChance(100.0),
    '#forge:paper',[
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'#botania:petals/blue']),
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'#byg:biomepedia_crafting_material']),
        event.recipes.create.filling(incomplete_blueprint,[incomplete_blueprint,Fluid.of('immersiveengineering:redstone_acid',1000)]),
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0}')]),
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'botania:manasteel_ingot']),
        event.recipes.create.pressing(incomplete_blueprint,incomplete_blueprint)
    ])
    .transitionalItem(incomplete_blueprint).loops(3)
    event.recipes.create.sequenced_assembly(Item.of('immersiveengineering:blueprint', '{blueprint:"specialBullet"}').withChance(100.0),
    '#forge:paper',[
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'#botania:petals/blue']),
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'#byg:biomepedia_crafting_material']),
        event.recipes.create.filling(incomplete_blueprint,[incomplete_blueprint,Fluid.of('immersiveengineering:redstone_acid',1000)]),
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'immersiveengineering:mold_bullet_casing']),
        event.recipes.create.deploying(incomplete_blueprint,[incomplete_blueprint,'botania:manasteel_ingot']),
        event.recipes.create.pressing(incomplete_blueprint,incomplete_blueprint)
    ])
    .transitionalItem(incomplete_blueprint).loops(3)
    const incomplete_generator = 'techrevival:incomplete_generator'
    event.recipes.create.sequenced_assembly([Item.of('immersiveengineering:generator').withChance(0.5),Item.of('industrialforegoing:machine_frame_pity').withChance(0.5)],
    'industrialforegoing:machine_frame_pity',[
        event.recipes.create.deploying(incomplete_generator,[incomplete_generator,'immersiveengineering:plate_duroplast']),
        event.recipes.create.filling(incomplete_generator,[incomplete_generator,Fluid.of('immersiveengineering:acetaldehyde',1000)]),
        event.recipes.create.deploying(incomplete_generator,[incomplete_generator,'createindustry:heavy_plate']),
    ])
    .transitionalItem(incomplete_generator).loops(1)
    const incomplete_chamber = 'techrevival:incomplete_dissolution_chamber'
    event.recipes.create.sequenced_assembly(
        Item.of('industrialforegoing:dissolution_chamber').withChance(100.0),
        'industrialforegoing:machine_frame_pity',[
        event.recipes.create.deploying(incomplete_chamber,[incomplete_chamber,'immersiveengineering:circuit_board']),
        event.recipes.create.filling(incomplete_chamber,[incomplete_chamber,Fluid.of('immersiveengineering:acetaldehyde',1000)]),
        event.recipes.create.deploying(incomplete_chamber,[incomplete_chamber,'botania:bifrost_perm']),
        event.recipes.create.filling(incomplete_chamber,[incomplete_chamber,Fluid.of('integrateddynamics:menril_resin',1000)]),
        ])
    .transitionalItem(incomplete_chamber).loops(4)
    const raw_advanced = 'refinedstorage:raw_advanced_processor'
    event.recipes.create.sequenced_assembly(
        Item.of('refinedstorage:advanced_processor').withChance(100.0),
        'botania:life_essence',[
        event.recipes.create.deploying(raw_advanced,[raw_advanced,'immersiveengineering:circuit_board']),
        event.recipes.create.filling(raw_advanced,[raw_advanced,Fluid.of('integrateddynamics:menril_resin',1000)]),
        event.recipes.create.deploying(raw_advanced,[raw_advanced,'create:precision_mechanism']),
        event.recipes.create.deploying(raw_advanced,[raw_advanced,'refinedstorage:silicon']),
        event.recipes.create.deploying(raw_advanced,[raw_advanced,'industrialforegoing:diamond_gear']),
        event.recipes.create.deploying(raw_advanced,[raw_advanced,'refinedstorage:quartz_enriched_iron']),
        event.recipes.create.pressing(raw_advanced,raw_advanced)
        ])
    .transitionalItem(raw_advanced).loops(4)
    const raw_1k = 'techrevival:raw_1k_storage_part'
    const raw_4k = 'techrevival:raw_4k_storage_part'
    const raw_16k = 'techrevival:raw_16k_storage_part'
    const raw_64k = 'techrevival:raw_64k_storage_part'
    event.recipes.create.sequenced_assembly(
        Item.of('refinedstorage:1k_storage_part').withChance(100.0),
        'refinedstorage:silicon',[
        event.recipes.create.filling(raw_1k,[raw_1k,Fluid.of('integrateddynamics:menril_resin',1000)]),
        event.recipes.create.deploying(raw_1k,[raw_1k,'integrateddynamics:cable']),
        event.recipes.create.deploying(raw_1k,[raw_1k,'refinedstorage:cable']),
        event.recipes.create.deploying(raw_1k,[raw_1k,'mekanism:basic_universal_cable']),
        event.recipes.create.pressing(raw_1k,raw_1k)
        ])
    .transitionalItem(raw_1k).loops(3)
    event.recipes.create.sequenced_assembly(
        Item.of('refinedstorage:4k_storage_part').withChance(100.0),
        'mekanism:basic_control_circuit',[
        event.recipes.create.filling(raw_4k,[raw_4k,Fluid.of('integrateddynamics:menril_resin',1000)]),
        event.recipes.create.deploying(raw_4k,[raw_4k,'refinedstorage:1k_storage_part']),
        event.recipes.create.deploying(raw_4k,[raw_4k,'minecraft:gold_ingot']),
        event.recipes.create.deploying(raw_4k,[raw_4k,'botania:manasteel_nugget']),
        event.recipes.create.pressing(raw_4k,raw_4k)
        ])
    .transitionalItem(raw_4k).loops(3)
    event.recipes.create.sequenced_assembly(
        Item.of('refinedstorage:16k_storage_part').withChance(100.0),
        'mekanism:advanced_control_circuit',[
        event.recipes.create.filling(raw_16k,[raw_16k,Fluid.of('integrateddynamics:menril_resin',1000)]),
        event.recipes.create.deploying(raw_16k,[raw_16k,'refinedstorage:4k_storage_part']),
        event.recipes.create.deploying(raw_16k,[raw_16k,'minecraft:emerald']),
        event.recipes.create.deploying(raw_16k,[raw_16k,'botania:elementium_nugget']),
        event.recipes.create.pressing(raw_16k,raw_16k)
        ])
    .transitionalItem(raw_16k).loops(3)
    event.recipes.create.sequenced_assembly(
        Item.of('refinedstorage:64k_storage_part').withChance(100.0),
        'mekanism:elite_control_circuit',[
        event.recipes.create.filling(raw_64k,[raw_64k,Fluid.of('integrateddynamics:menril_resin',1000)]),
        event.recipes.create.deploying(raw_64k,[raw_64k,'refinedstorage:16k_storage_part']),
        event.recipes.create.deploying(raw_64k,[raw_64k,'minecraft:diamond']),
        event.recipes.create.deploying(raw_64k,[raw_64k,'botania:terrasteel_nugget']),
        event.recipes.create.pressing(raw_64k,raw_64k)
        ])
    .transitionalItem(raw_advanced).loops(3)
    event.recipes.create.sequenced_assembly(
        Item.of('mekanism:substrate').withChance(100.0),
        'industrialforegoing:plastic',[
        event.recipes.create.filling(raw_advanced,[raw_advanced,Fluid.of('mekanism:sulfur_dioxide',1000)]),
        event.recipes.create.deploying(raw_advanced,[raw_advanced,'twilightforest:fiery_block']),
        event.recipes.create.filling(raw_advanced,[raw_advanced,Fluid.of('mekanism:hydrogen',1000)]),
        event.recipes.create.deploying(raw_advanced,[raw_advanced,'twilightforest:knightmetal_block']),
        event.recipes.create.pressing(incomplete,incomplete)
        ])
    .transitionalItem(raw_advanced).loops(1)  
    //hekeji
    event.remove({id:'mekanismgenerators:chemical_infusing/fusion_fuel'})
    event.recipes.mekanism.chemical_infusing({amount:2,gas:'mekanismgenerators:fusion_fuel'},{amount:1,gas:'techrevival:dt_fuel'},{amount:1,gas:'techrevival:helium_3'})
    event.recipes.mekanism.chemical_infusing({amount:2,gas:'techrevival:dt_fuel'},{amount:1,gas:'mekanismgenerators:tritium'},{amount:1,gas:'mekanismgenerators:deuterium'})
    event.recipes.mekanism.dissolution({amount:10,gas:'techrevival:helium_3'}, {amount:10,gas:'mekanism:hydrofluoric_acid'}, 'ad_astra:moon_sand')
    event.recipes.create.deploying('immersiveengineering:blastbrick',['createindustry:fireproof_bricks','irons_spellbooks:fire_rune'])
    event.recipes.create.filling('irons_spellbooks:fire_rune',['irons_spellbooks:blank_rune',Fluid.of('minecraft:lava',1000)])
    event.recipes.create.mixing(Fluid.of('ad_astra:fuel',4),[Fluid.of('mekanism:oxygen',1),Fluid.of('industrialforegoing:biofuel',1),Fluid.of('immersivepetroleum:kerosene',2)])
    event.recipes.create.mixing(Fluid.of('ad_astra:cryo_fuel',300),[Fluid.of('ad_astra:fuel',150),'ad_astra:cheese','ad_astra:ice_shard'],20*3).heated()
    event.recipes.botania.mana_infusion('botania:manasteel_ingot', "immersiveengineering:ingot_steel", 6000, "irons_spellbooks:arcane_anvil")
    event.recipes.botania.mana_infusion('byg:subzero_crystal_shard', "minecraft:amethyst_shard", 1000, "irons_spellbooks:arcane_anvil")
    event.recipes.botania.mana_infusion('immersiveengineering:plate_duroplast', 'industrialforegoing:dryrubber', 10000,'botania:conjuration_catalyst')
    event.recipes.botania.mana_infusion('mekanism:basic_universal_cable', 'refinedstorage:cable', 1000,'botania:conjuration_catalyst')
    event.recipes.botania.mana_infusion('mekanism:basic_control_circuit', 'mythicbotany:alfsteel_ingot', 30000,'refinedstorage:controller')
    event.recipes.botania.mana_infusion('immersiveengineering:sample_drill', 'immersivepetroleum:seismic_survey', 10000,'refinedstorage:controller')
    event.recipes.botania.mana_infusion(Item.of('botania:life_essence',2), 'botania:life_essence', 100000,'refinedstorage:controller')
    event.recipes.botania.mana_infusion(Item.of('cataclysm:witherite_ingot',4), 'minecraft:nether_star', 60000,'cataclysm:mechanical_fusion_anvil')
    event.recipes.mekanism.press
    event.recipes.botania.elven_trade('immersiveengineering:wooden_grip',['botania:livingwood_twig','immersiveengineering:treated_wood_horizontal','immersiveengineering:plate_duroplast'])
    event.recipes.industrialforegoing.dissolution_chamber(['industrialforegoing:machine_frame_pity','immersiveengineering:logic_circuit','integrateddynamics:cable','botania:elementium_ingot','irons_spellbooks:cinder_essence'],
    Fluid.of('immersiveengineering:redstone_acid',1000),'industrialforegoing:machine_frame_simple',20*15)
    event.recipes.industrialforegoing.dissolution_chamber(['botania:terra_plate','industrialforegoing:pink_slime_ingot','industrialforegoing:pink_slime_ingot','botania:elementium_block','botania:terrasteel_block','mythicbotany:asgard_rune','mythicbotany:vanaheim_rune','twilightforest:torchberries'],
    Fluid.of('immersiveengineering:phenolic_resin',1000),'mythicbotany:mana_infuser',20*30)
    event.recipes.industrialforegoing.dissolution_chamber(['botania:natura_pylon','twilightforest:naga_scale','mekanism:dust_diamond','mythicbotany:alfsteel_nugget','mythicbotany:alfsteel_nugget','minecraft:ghast_tear','minecraft:ghast_tear'],
    Fluid.of('create:honey',1000),'mythicbotany:alfsteel_pylon',20*15)
    event.recipes.industrialforegoing.dissolution_chamber(['#irons_spellbooks:arcane_ingot_base','minecraft:quartz','byg:subzero_crystal_shard'],
    Fluid.of('immersiveengineering:acetaldehyde',100),'refinedstorage:quartz_enriched_iron',20*3)
    event.recipes.industrialforegoing.dissolution_chamber(['mekanism:advanced_control_circuit','mekanism:basic_control_circuit','mekanism:alloy_infused','industrialforegoing:plastic','createindustry:heavy_plate'],
    Fluid.of('immersivepetroleum:lubricant',500),'mekanism:energy_tablet',20*10)
    event.recipes.industrialforegoing.dissolution_chamber('mekanism:substrate',
    Fluid.of('immersivepetroleum:ethylene',500),'mekanism:hdpe_pellet',20*8)
    event.recipes.industrialforegoing.dissolution_chamber(['minecraft:dragon_head','thirstcanteen:military_bottle','minecraft:ender_eye'],
    Fluid.of('immersiveengineering:acetaldehyde',1000),'thirstcanteen:dragon_bottle',20*5)
    
    event.recipes.create.mechanical_crafting('botania:terra_plate', [
        "ZQQQZ",
        "QMHRQ",
        "QFGSQ",
        "QCDEQ",
        "ZQQQZ"
    ], {
        Z: "botania:mana_diamond",
        Q: "minecraft:lapis_block",
        M:"irons_spellbooks:ender_rune",
        H: "botania:rune_fire",
        R:'irons_spellbooks:nature_rune',
        F:"botania:rune_air",
        G:"botania:manasteel_block",
        S:"botania:rune_water",
        C:"irons_spellbooks:fire_rune",
        D:"botania:rune_earth",
        E:"irons_spellbooks:holy_rune"
    })
    event.recipes.create.mechanical_crafting('botania:alchemy_catalyst', [
        "HHHHH",
        "HJHJH",
        "HHKHH",
        "HJHJH",
        "HHHHH"
    ], {
        H:'botania:livingrock',
        K:'irons_spellbooks:holy_upgrade_orb',
        J:'create:precision_mechanism',
    })
    event.recipes.create.mechanical_crafting(Item.of('integrateddynamics:cable',10), [
        "MMMMM",
        "AAAAA",
        "MMMMM"
    ], {
        M: "integrateddynamics:crystalized_menril_chunk",
        A: "irons_spellbooks:arcane_ingot"
    })
    event.recipes.create.mechanical_crafting(Item.of('refinedstorage:machine_casing',4), [
        "MAMAM",
        "AMAMA",
        "MAKAM",
        "AMAMA",
        "MAMAM",
    ], {
        M: 'refinedstorage:silicon',
        A: 'refinedstorage:quartz_enriched_iron',
        K: 'industrialforegoing:machine_frame_pity'
    })
    event.recipes.create.mechanical_crafting('industrialforegoing:mob_slaughter_factory', [
        "LLLLL",
        "LGSGL",
        "LSKSL",
        "LGSGL",
        "GGGGG"
    ], {
        L: 'immersiveengineering:sheetmetal_aluminum',
        G: 'immersiveengineering:plate_steel',
        S: 'mekanismgenerators:turbine_blade',
        K: 'industrialforegoing:machine_frame_simple'
    })
    event.recipes.create.mechanical_crafting('mekanism:metallurgic_infuser', [
        "KKKKK",
        "EESEE",
        "ESBSE",
        "EESEE",
        "KKKKK"
    ], {
        B: 'mekanism:basic_control_circuit',
        E: '#forge:ingots/osmium',
        S: 'minecraft:netherite_scrap',
        K: 'refinedstorage:machine_casing'
    })
    event.recipes.create.mechanical_crafting('ad_astra:rocket_nose_cone', [
        "   T   ",
        "  KKK  ",
        "  GHG  ",
        " GGGGG ",
        " GGGGG ",
        "GGGGGGG",
        "GGGGGGG"
    ], {
        G: 'createindustry:heavy_plate',
        H: '#forge:storage_blocks/brass',
        K: 'immersiveengineering:storage_constantan',
        T: 'minecraft:waxed_copper_block'
    })
    event.recipes.create.mechanical_crafting(Item.of('mekanism:advanced_control_circuit',8), [
        "EEEEE",
        "EKKKE",
        "EKBKE",
        "EKKKE",
        "EEEEE"
    ], {
        B: 'industrialforegoing:machine_frame_advanced',
        E: 'mekanism:alloy_infused',
        K: 'mekanism:basic_control_circuit'
    })
    event.recipes.create.mechanical_crafting(Item.of('mekanism:elite_control_circuit',8), [
        "EEEEE",
        "EKKKE",
        "EKBKE",
        "EKKKE",
        "EEEEE"
    ], {
        B: 'industrialforegoing:machine_frame_supreme',
        E: 'mekanism:alloy_reinforced',
        K: 'mekanism:advanced_control_circuit'
    })
    event.recipes.create.mechanical_crafting(Item.of('mekanism:ultimate_control_circuit',8), [
        "EEEEE",
        "EKKKE",
        "EKBKE",
        "EKKKE",
        "EEEEE"
    ], {
        B: 'refinedstorage:controller',
        E: 'mekanism:alloy_atomic',
        K: 'mekanism:elite_control_circuit'
    })
    event.recipes.create.mechanical_crafting('ad_astra:steel_engine', [
        "EGGGE",
        "EGGGE",
        "EBBBE",
        "EYYYE",
        "ESSSE"
    ], {
        B: 'twilightforest:ice_bomb',
        E: '#forge:storage_blocks/steel',
        G: 'create:fluid_pipe',
        S: 'ad_astra:engine_fan',
        Y: 'ad_astra:engine_frame'
    })//gang
    event.recipes.create.mechanical_crafting('ad_astra:desh_engine', [
        "EGGGE",
        "EGGGE",
        "EBBBE",
        "EYYYE",
        "ESSSE"
    ], {
        B: 'twilightforest:ice_bomb',
        E: '#forge:storage_blocks/desh',
        G: 'ad_astra:desh_fluid_pipe',
        S: 'ad_astra:engine_fan',
        Y: 'ad_astra:engine_frame'
    })//desh
    event.recipes.create.mechanical_crafting('ad_astra:ostrum_engine', [
        "EGGGE",
        "EGGGE",
        "EBBBE",
        "EYYYE",
        "ESSSE"
    ], {
        B: 'twilightforest:ice_bomb',
        E: 'ad_astra:ostrum_block',
        G: 'ad_astra:ostrum_fluid_pipe',
        S: 'ad_astra:engine_fan',
        Y: 'ad_astra:engine_frame'
    })//zijn 
    event.recipes.create.mechanical_crafting('ad_astra:ostrum_engine', [
        "EGGGE",
        "EGGGE",
        "EBBBE",
        "EYYYE",
        "ESSSE"
    ], {
        B: 'twilightforest:ice_bomb',
        E: '#ad_astra_platform:calorite_blocks',
        G: 'mekanism:ultimate_pressurized_tube',
        S: 'ad_astra:engine_fan',
        Y: 'ad_astra:engine_frame'
    })//naire 

    event.recipes.create.mechanical_crafting('tacz:gun_smith_table', [
        " L ",
        "ABC",
        "YHY",
        "GKG"
    ], {
        A: 'immersiveengineering:wirecutter',
        B: 'immersiveengineering:screwdriver',
        C: 'immersiveengineering:component_electronic_adv',
        G: 'createindustry:heavy_plate',
        H: 'industrialforegoing:machine_frame_advanced',
        L: Item.of('immersiveengineering:blueprint', '{blueprint:"specialBullet"}'),
        Y: 'botania:life_essence',
        K: 'immersiveengineering:storage_steel'
    })
    event.recipes.create.mechanical_crafting('mekanism:digital_miner', [
        "EEEEE",
        "ENMLE",
        "WKBKW",
        "EJJJE",
        "EEWEE"
    ], {
        E: '#forge:storage_blocks/steel',
        W: 'mekanism:logistical_sorter',
        B: Item.of('twilightforest:giant_pickaxe'),
        J: 'mekanism:ultimate_logistical_transporter',
        N: 'botania:orechid',
        L: 'botania:orechid_ignem',
        M: 'mekanism:ultimate_energy_cube',
        K: 'mekanism:ultimate_control_circuit'
    })
    event.recipes.create.mechanical_crafting(Item.of('ad_astra:space_suit', '{BotariumData:{},Damage:0}'), [
        "YYZYY",
        "LCYCL",
        "LGFGL",
        "LCCCL",
        "YYYYY"
    ], {
        Y: 'mekanism:hdpe_sheet',
        Z: 'mekanism:ultimate_control_circuit',
        C: 'twilightforest:fiery_ingot',
        F: 'mekanism:hazmat_gown',
        G: Item.of('ad_astra:oxygen_tank'),
        L: 'immersiveengineering:storage_aluminum'
    })
    event.recipes.create.mechanical_crafting(Item.of('ad_astra:space_helmet', '{Damage:0}'), [
        "LYYYL",
        "LGFGL",
        "LCZCL"
    ], {
        Y: 'mekanism:hdpe_sheet',
        Z: 'mekanism:ultimate_control_circuit',
        C: 'twilightforest:fiery_ingot',
        F: 'mekanism:hazmat_mask',
        G: 'minecraft:tinted_glass',
        L: 'immersiveengineering:storage_aluminum'
    })
    event.recipes.create.mechanical_crafting(Item.of('ad_astra:space_boots', '{Damage:0}'), [
        "LYYYL",
        "LCFCL",
        "LCZCL"
    ], {
        Y: 'mekanism:hdpe_sheet',
        Z: 'mekanism:ultimate_control_circuit',
        C: 'twilightforest:fiery_ingot',
        F: 'mekanism:hazmat_boots',
        L: 'immersiveengineering:storage_aluminum'
    })
    event.recipes.create.mechanical_crafting(Item.of('ad_astra:space_pants', '{Damage:0}'), [
        "YYYYY",
        "LCCCL",
        "LCFCL",
        "LCYCL",
        "YYZYY"
    ], {
        Y: 'mekanism:hdpe_sheet',
        Z: 'mekanism:ultimate_control_circuit',
        C: 'twilightforest:fiery_ingot',
        F: 'mekanism:hazmat_pants',
        L: 'immersiveengineering:storage_aluminum'
    })
    event.recipes.create.mechanical_crafting(Item.of('ad_astra:rocket_fin',4), [
        "   K   ",
        "  GKG  ",
        " GGKGG ",
        "GG   GG",
        "G     G"
    ], {
        G: 'createindustry:heavy_plate',
        K: 'immersiveengineering:storage_steel'
    })
    event.recipes.create.mechanical_crafting('ad_astra:ostrum_tank', [
        " KKK",
        " KDK",
        "GHDK",
        " KDK",
        " KDK",
        " KKK"
    ], {
        G: 'immersiveengineering:storage_steel',
        K: 'ad_astra:ostrum_block',
        D: 'ad_astra:ostrum_fluid_pipe',
        H: 'cataclysm:void_stone'
    })//zijinguan
    event.recipes.create.mechanical_crafting('ad_astra:steel_tank', [
        " KKK",
        " KDK",
        "GHDK",
        " KDK",
        " KDK",
        " KKK"
    ], {
        G: 'immersiveengineering:storage_steel',
        K: '#forge:storage_blocks/steel',
        D: 'create:fluid_pipe',
        H: 'cataclysm:witherite_ingot'
    })//gangchuguan
    event.recipes.create.mechanical_crafting('ad_astra:desh_tank', [
        " KKK",
        " KDK",
        "GHDK",
        " KDK",
        " KDK",
        " KKK"
    ], {
        G: 'immersiveengineering:storage_steel',
        K: '#forge:storage_blocks/desh',
        D: 'ad_astra:desh_fluid_pipe',
        H: 'cataclysm:ignitium_ingot'
    })//desh
    
    event.recipes.create.mechanical_crafting('ad_astra:calorite_tank', [
        " KKK",
        " KDK",
        "GHDK",
        " KDK",
        " KDK",
        " KKK"
    ], {
        G: 'immersiveengineering:storage_steel',
        K: '#forge:storage_blocks/calorite',
        D: 'mekanism:ultimate_pressurized_tube',
        H: 'cataclysm:ancient_metal_ingot'
    })//naire
    event.recipes.create.mechanical_crafting('storagedrawers:creative_vending_upgrade', [
        "aabbcbbaa",
        "adefgheda",
        "bijklmnob",
        "bpqrstupb",
        "cplvwvlpc",
        "bxyzvABxb",
        "bxCDlEFxb",
        "adeGHIeda",
        "aabbcbbaa"
    ],{
        a:'botania:gaia_pylon',
        b:'mythicbotany:alfsteel_block',
        c:'botania:gaia_ingot',
        d:'immersiveengineering:component_electronic_adv', 
        e:'ad_astra:calorite_block',
        f:'mekanism:digital_miner',
        g:'mythicbotany:alfsteel_pick',
        h:'twilightforest:snow_queen_trophy',
        i:'mythicbotany:mana_ring_greatest',
        j:'mythicbotany:alfsteel_helmet',
        k:'cataclysm:ignitium_helmet',
        l:'mekanism:ultimate_control_circuit',
        m:'cataclysm:ignitium_elytra_chestplate',
        n:'mythicbotany:alfsteel_chestplate',
        o:'mythicbotany:aura_ring_greatest',
        p:'refinedstorage:64k_storage_part',
        q:'mekanism:mekasuit_helmet',
        r:'ad_astra:jet_suit_helmet',
        s:'alexsmobs:shattered_dimensional_carver',
        t:'ad_astra:jet_suit',
        u:'mekanism:mekasuit_bodyarmor',
        v:'mekanism:pellet_antimatter',
        w:'alexsmobs:transmutation_table',
        x:'refinedstorage:4096k_fluid_storage_part',
        y:'mekanism:mekasuit_boots',
        z:'ad_astra:jet_suit_boots',
        A:'ad_astra:jet_suit_pants',
        B:'mekanism:mekasuit_pants',
        C:'mythicbotany:alfsteel_boots',
        D:'cataclysm:ignitium_boots',
        E:'cataclysm:ignitium_leggings',
        F:'mythicbotany:alfsteel_leggings',
        G:'mythicbotany:alfsteel_sword',
        H:'mythicbotany:mjoellnir',
        I:'mythicbotany:alfsteel_axe'
    })//naire
    event.recipes.create.mechanical_crafting('minecraft:oak_sapling', [
        "aaaaaaaaa",
        "aaaaaaaaa",
        "aaaaaaaaa",
        "aaaaaaaaa",
        "aaaaaaaaa",
        "aaaaaaaaa",
        "aaaaaaaaa",
        "aaaaaaaaa",
        "aaaaaaaaa"
    ],{
        a:'botania:gaia_pylon',
    })

    
    event.remove({output:'create:copper_backtank'})
    event.recipes.create.mechanical_crafting(Item.of('create:copper_backtank', '{Air:0}'), [
    " S ",
    " C ",
    "CGC",
    " C "
    ], {
    C: '#forge:plates/copper',
    S: 'immersiveengineering:stick_steel',
    G: '#forge:glass'
    })

    event.remove({output:'#forge:dusts/diamond'})
    event.recipes.create.crushing(
    [ Item.of('minecraft:diamond').withChance(0.8),
    "mekanism:dust_diamond"
    ], 
    "minecraft:diamond"
    ).processingTime(20 * 10)
    event.remove({output:'create:mechanical_drill'})
    event.shaped('create:mechanical_drill',[
    ' D ',
    'AIA',
    ' C '
    ],{
    D:'#forge:dusts/diamond',
    A:'create:andesite_alloy',
    I:'#forge:ingots/iron',
    C:'create:andesite_casing'
    })
    event.remove({output:'create:hose_pulley'})
    event.shaped('create:hose_pulley',[
    'SCF',
    'WKW',
    ' P ',
    ],{
    S:'create:shaft',
    C:'create:copper_casing',
    F:'create:fluid_pipe',
    W:'#forge:wires/steel',
    K:'minecraft:dried_kelp_block',
    P:'#forge:plates/copper'
    })
    event.recipes.create.milling(Item.of('#forge:dusts/charcoal', 3), [
    'minecraft:charcoal'
    ])
    event.recipes.create.milling(Item.of('#forge:dusts/charcoal', 27), [
    '#forge:storage_blocks/charcoal'
    ])
    // event.remove({output:"thirst:sand_filter"})
    const incomplete_sand_filter = "techrevival:incomplete_sand_filter"
    event.recipes.create.sequenced_assembly(
    [Item.of('thirst:sand_filter').withChance(1)],
    'create:fluid_tank',[
    event.recipes.create.deploying(incomplete_sand_filter,[incomplete_sand_filter,'create:nozzle']),
    event.recipes.create.deploying(incomplete_sand_filter,[incomplete_sand_filter,'#forge:dusts/charcoal']),
    event.recipes.create.deploying(incomplete_sand_filter,[incomplete_sand_filter,'farmersdelight:canvas']),
    event.recipes.create.deploying(incomplete_sand_filter,[incomplete_sand_filter,'#forge:sand']),
    event.recipes.create.pressing(incomplete_sand_filter,incomplete_sand_filter)
    ]).transitionalItem(incomplete_sand_filter).loops(1)
    event.remove({output:'create:speedometer'})
    event.remove({output:'create:stressometer'})
    const incomplete_speedometer = "techrevival:incomplete_speedometer"
    event.recipes.create.sequenced_assembly(
    [Item.of('create:speedometer').withChance(1)],
    'create:andesite_casing',[
    event.recipes.create.deploying(incomplete_speedometer,[incomplete_speedometer,'create:shaft']),
    event.recipes.create.deploying(incomplete_speedometer,[incomplete_speedometer,'#forge:wires/copper']),
    event.recipes.create.deploying(incomplete_speedometer,[incomplete_speedometer,'immersiveengineering:wirecoil_copper']),
    event.recipes.create.deploying(incomplete_speedometer,[incomplete_speedometer,'#forge:wires/copper']),
    event.recipes.create.deploying(incomplete_speedometer,[incomplete_speedometer,'#forge:rods/iron']),
    event.recipes.create.deploying(incomplete_speedometer,[incomplete_speedometer,'create_sa:copper_magnet']).keepHeldItem(),
    event.recipes.create.deploying(incomplete_speedometer,[incomplete_speedometer,'minecraft:compass'])
    ]).transitionalItem(incomplete_speedometer).loops(1)
    const incomplete_copper_magnet = 'techrevival:incomplete_copper_magnet'
    event.remove({output:'create_sa:copper_magnet'})
    event.recipes.create.sequenced_assembly(
    [Item.of('create_sa:copper_magnet').withChance(1)],
    '#forge:plates/copper',[
    event.recipes.create.cutting(incomplete_copper_magnet, incomplete_copper_magnet),
    event.recipes.create.deploying(incomplete_copper_magnet,[incomplete_copper_magnet,'minecraft:iron_nugget']),
    event.recipes.create.deploying(incomplete_copper_magnet,[incomplete_copper_magnet,'minecraft:iron_nugget']),
    event.recipes.create.deploying(incomplete_copper_magnet,[incomplete_copper_magnet,'minecraft:compass']).keepHeldItem(),
    event.recipes.create.pressing(incomplete_copper_magnet,incomplete_copper_magnet)
    ]).transitionalItem(incomplete_copper_magnet).loops(1)
    event.recipes.botania.mana_infusion('create:stressometer','create:speedometer', 200)
    event.recipes.botania.mana_infusion('create:speedometer','create:stressometer', 200)
    event.remove({input:"wheat",output:"bread"})

})
