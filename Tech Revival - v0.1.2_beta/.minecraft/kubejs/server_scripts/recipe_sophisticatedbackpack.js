ServerEvents.recipes(event=>{
    event.remove({input:'sophisticatedbackpacks:upgrade_base'})
    event.remove({output:'sophisticatedbackpacks:upgrade_base'})
    event.remove({mod:"sophisticatedbackpacks",input:"redstone"})
    event.remove({mod:"sophisticatedbackpacks",input:"#forge:storage_blocks",type:"crafting_shaped"})
    event.remove({output:"sophisticatedbackpacks:auto_smoking_upgrade"})
    event.remove({output:"sophisticatedbackpacks:smoking_upgrade"})
    event.remove({output:"sophisticatedbackpacks:auto_blasting_upgrade"})
    event.remove({output:"sophisticatedbackpacks:blasting_upgrade"})
    // event.remove({output:"sophisticatedbackpacks:backpack"})
    event.remove({output:"#curios:back",mod:"sophisticatedbackpacks"})
    event.shaped('sophisticatedbackpacks:upgrade_base',[
        'YAY',
        'APA',
        'YAY'
    ],{
        Y:'farmersdelight:canvas',
        A:'irons_spellbooks:magic_cloth',
        P:'irons_spellbooks:blank_rune'
    })
    event.smithing('sophisticatedbackpacks:copper_backpack','sophisticatedbackpacks:backpack','create:copper_casing')
    //钻石背包
    event.recipes.botania.elven_trade('sophisticatedbackpacks:diamond_backpack',['sophisticatedbackpacks:gold_backpack','botania:conjuration_catalyst','botania:mana_diamond'])
    //铁背包
    event.recipes.botania.mana_infusion('sophisticatedbackpacks:iron_backpack', "sophisticatedbackpacks:copper_backpack", 60000, "irons_spellbooks:arcane_anvil")
    //下界合金背包
    event.recipes.industrialforegoing.dissolution_chamber(['sophisticatedbackpacks:diamond_backpack','minecraft:netherite_ingot','cataclysm:witherite_ingot'],
        Fluid.of('mekanism:hydrofluoric_acid',1000),'sophisticatedbackpacks:netherite_backpack',20*5)
    //金背包
    event.recipes.create.mechanical_crafting('sophisticatedbackpacks:gold_backpack', [
        "JJJ",
        "JSJ",
        "JBJ",
        "JMJ",
        "JJJ"
    ], {
        B: "sophisticatedbackpacks:iron_backpack",
        J: "#forge:plates/gold",
        S:"irons_spellbooks:holy_rune",
        M: "create:precision_mechanism"
    })
    //普通背包
    event.shaped('sophisticatedbackpacks:backpack',[
        ['irons_spellbooks:magic_cloth','#forge:leather','irons_spellbooks:magic_cloth'],
        ['irons_spellbooks:magic_cloth','#forge:chests/wooden','irons_spellbooks:magic_cloth'],
        ['#forge:leather','#forge:leather','#forge:leather']
    ])

    event.recipes.create.deploying('sophisticatedbackpacks:tank_upgrade',['sophisticatedbackpacks:upgrade_base','create:fluid_tank'])
    event.recipes.create.deploying('sophisticatedbackpacks:pump_upgrade',['sophisticatedbackpacks:upgrade_base','create:mechanical_pump'])
    event.recipes.create.deploying('sophisticatedbackpacks:pickup_upgrade',['sophisticatedbackpacks:upgrade_base','create:chute'])
    event.recipes.create.deploying('sophisticatedbackpacks:filter_upgrade',['sophisticatedbackpacks:upgrade_base','create:filter'])
    event.recipes.create.deploying('sophisticatedbackpacks:magnet_upgrade',['sophisticatedbackpacks:upgrade_base','create_sa:copper_magnet'])
    event.recipes.create.deploying('sophisticatedbackpacks:feeding_upgrade',['sophisticatedbackpacks:upgrade_base','create:deployer'])
    event.recipes.create.deploying('sophisticatedbackpacks:compacting_upgrade',['sophisticatedbackpacks:upgrade_base','piston'])
    event.recipes.create.filling('sophisticatedbackpacks:void_upgrade',['sophisticatedbackpacks:upgrade_base',Fluid.of('minecraft:lava',1000)])
    event.recipes.create.deploying('sophisticatedbackpacks:restock_upgrade',['sophisticatedbackpacks:upgrade_base','create:andesite_funnel'])
    event.recipes.botania.mana_infusion('sophisticatedbackpacks:restock_upgrade','sophisticatedbackpacks:deposit_upgrade',200)
    event.recipes.botania.mana_infusion('sophisticatedbackpacks:deposit_upgrade','sophisticatedbackpacks:restock_upgrade',200)
    event.recipes.botania.mana_infusion('sophisticatedbackpacks:advanced_restock_upgrade','sophisticatedbackpacks:advanced_deposit_upgrade',200)
    event.recipes.botania.mana_infusion('sophisticatedbackpacks:advanced_deposit_upgrade','sophisticatedbackpacks:advanced_restock_upgrade',200)
    event.recipes.botania.mana_infusion('sophisticatedbackpacks:advanced_deposit_upgrade','sophisticatedbackpacks:advanced_restock_upgrade',200)
    event.recipes.create.deploying('sophisticatedbackpacks:refill_upgrade',['sophisticatedbackpacks:upgrade_base','minecraft:hopper'])

    event.recipes.create.deploying('sophisticatedbackpacks:smelting_upgrade',['sophisticatedbackpacks:upgrade_base','minecraft:furnance'])
    event.recipes.create.deploying('sophisticatedbackpacks:smoking_upgrade',['sophisticatedbackpacks:upgrade_base','minecraft:smoker'])
    event.recipes.create.deploying('sophisticatedbackpacks:blasting_upgrade',['sophisticatedbackpacks:upgrade_base','minecraft:blast_furnance'])
    event.recipes.create.deploying('sophisticatedbackpacks:crafting_upgrade',['sophisticatedbackpacks:upgrade_base','minecraft:crafting_table'])
    event.recipes.create.deploying('sophisticatedbackpacks:stonecutter_upgrade',['sophisticatedbackpacks:upgrade_base','minecraft:stonecutter'])
    event.recipes.create.deploying('sophisticatedbackpacks:jukebox_upgrade',['sophisticatedbackpacks:upgrade_base','minecraft:jukebox'])
    event.recipes.create.deploying('sophisticatedbackpacks:battery_upgrade',['sophisticatedbackpacks:upgrade_base','immersiveengineering:capacitor_lv'])
    event.recipes.create.deploying('sophisticatedbackpacks:anvil_upgrade',['sophisticatedbackpacks:upgrade_base','minecraft:anvil'])

    event.recipes.create.deploying('sophisticatedbackpacks:advanced_smelting_upgrade',['sophisticatedbackpacks:smelting_upgrade','techrevival:refill_core'])
    event.recipes.create.deploying('sophisticatedbackpacks:advanced_smoking_upgrade',['sophisticatedbackpacks:smoking_upgrade','techrevival:refill_core'])
    event.recipes.create.deploying('sophisticatedbackpacks:advanced_blasting_upgrade',['sophisticatedbackpacks:blasting_upgrade','techrevival:refill_core'])
    
    event.recipes.create.mechanical_crafting('sophisticatedbackpacks:inception_upgrade', [
        "BBBBB",
        "BCSCB",
        "BFUDB",
        "BPPPB",
        "BBBBB"
    ], {
        B:"sophisticatedbackpacks:backpack",
        C:'sophisticatedbackpacks:advanced_compacting_upgrade',
        S:'integrateddynamics:mechanical_squeezer',
        F:'mekanism:basic_compressing_factory',
        U:'sophisticatedbackpacks:upgrade_base',
        D:'storagedrawers:compacting_drawers_3',
        P:'minecraft:piston'
    })
    event.recipes.create.mechanical_crafting('sophisticatedbackpacks:everlasting_upgrade', [
        "WEA",
        "BUC",
        "ING"
    ], {
        W:'cataclysm:witherite_ingot',
        E:'cataclysm:enderite_ingot',
        A:'cataclysm:ancient_metal_ingot',
        B:'cataclysm:black_steel_ingot',
        C:'cataclysm:cursium_ingot',
        I:'cataclysm:ignitium_ingot',
        N:'minecraft:netherite_ingot',
        G:'botania:gaia_ingot',
        U:'sophisticatedbackpacks:upgrade_base'
    })
    event.shapeless('techrevival:refill_core',['refinedstorage:basic_processor','create:mechanical_arm'])
    const incomplete_compacting_upgrade = "techrevival:incomplete_advanced_deposit_upgrade"
    event.recipes.create.sequenced_assembly(
        [Item.of('sophisticatedbackpacks:advanced_compacting_upgrade').withChance(1.0)],
        'sophisticatedbackpacks:compacting_upgrade',[
        event.recipes.create.deploying(incomplete_compacting_upgrade,[incomplete_compacting_upgrade,'integrateddynamics:squeezer']),
        event.recipes.create.deploying(incomplete_compacting_upgrade,[incomplete_compacting_upgrade,'minecraft:redstone']),
        event.recipes.create.deploying(incomplete_compacting_upgrade,[incomplete_compacting_upgrade,'create:electron_tube']),
        event.recipes.create.deploying(incomplete_compacting_upgrade,[incomplete_compacting_upgrade,'#forge:plates/gold'])
        ]).transitionalItem(incomplete_compacting_upgrade).loops(1)
    const incomplete_deposit_upgrade = "techrevival:incomplete_advanced_deposit_upgrade"
    event.recipes.create.sequenced_assembly(
        [Item.of('sophisticatedbackpacks:advanced_deposit_upgrade').withChance(1.0)],
        'sophisticatedbackpacks:deposit_upgrade',[
        event.recipes.create.deploying(incomplete_deposit_upgrade,[incomplete_deposit_upgrade,'create:brass_funnel']),
        event.recipes.create.deploying(incomplete_deposit_upgrade,[incomplete_deposit_upgrade,'minecraft:redstone']),
        event.recipes.create.deploying(incomplete_deposit_upgrade,[incomplete_deposit_upgrade,'create:electron_tube']),
        event.recipes.create.deploying(incomplete_deposit_upgrade,[incomplete_deposit_upgrade,'#forge:plates/gold'])
        ]).transitionalItem(incomplete_deposit_upgrade).loops(1)
    const incomplete_feeding_upgrade = 'techrevival:incomplete_advanced_feeding_upgrade'
    event.recipes.create.sequenced_assembly(
        [Item.of('sophisticatedbackpacks:advanced_feeding_upgrade').withChance(1.0)],
        'sophisticatedbackpacks:feeding_upgrade',[
        event.recipes.create.deploying(incomplete_feeding_upgrade,[incomplete_feeding_upgrade,'create:extendo_grip']),
        event.recipes.create.deploying(incomplete_feeding_upgrade,[incomplete_feeding_upgrade,'minecraft:redstone']),
        event.recipes.create.deploying(incomplete_feeding_upgrade,[incomplete_feeding_upgrade,'create:electron_tube']),
        event.recipes.create.deploying(incomplete_feeding_upgrade,[incomplete_feeding_upgrade,'#forge:plates/gold'])
        ]).transitionalItem(incomplete_feeding_upgrade).loops(1)
    const incomplete_filter_upgrade = 'techrevival:incomplete_advanced_filter_upgrade'
    event.recipes.create.sequenced_assembly(
        [Item.of('sophisticatedbackpacks:advanced_filter_upgrade').withChance(1.0)],
        'sophisticatedbackpacks:filter_upgrade',[
        event.recipes.create.deploying(incomplete_filter_upgrade,[incomplete_filter_upgrade,'create:attribute_filter']),
        event.recipes.create.deploying(incomplete_filter_upgrade,[incomplete_filter_upgrade,'minecraft:redstone']),
        event.recipes.create.deploying(incomplete_filter_upgrade,[incomplete_filter_upgrade,'create:electron_tube']),
        event.recipes.create.deploying(incomplete_filter_upgrade,[incomplete_filter_upgrade,'#forge:plates/gold'])
        ]).transitionalItem(incomplete_filter_upgrade).loops(1)
    const incomplete_magnet_upgrade = 'techrevival:incomplete_advanced_magnet_upgrade'
    event.recipes.create.sequenced_assembly(
        [Item.of('sophisticatedbackpacks:advanced_magnet_upgrade').withChance(1.0)],
        'sophisticatedbackpacks:magnet_upgrade',[
        event.recipes.create.deploying(incomplete_magnet_upgrade,[incomplete_magnet_upgrade,'create_sa:copper_magnet']),
        event.recipes.create.deploying(incomplete_magnet_upgrade,[incomplete_magnet_upgrade,'minecraft:redstone']),
        event.recipes.create.deploying(incomplete_magnet_upgrade,[incomplete_magnet_upgrade,'create:electron_tube']),
        event.recipes.create.deploying(incomplete_magnet_upgrade,[incomplete_magnet_upgrade,'#forge:plates/gold'])
        ]).transitionalItem(incomplete_magnet_upgrade).loops(1)
    const incomplete_pickup_upgrade = 'techrevival:incomplete_advanced_pickup_upgrade'
    event.recipes.create.sequenced_assembly(
        [Item.of('sophisticatedbackpacks:advanced_pickup_upgrade').withChance(1.0)],
        'sophisticatedbackpacks:pickup_upgrade',[
        event.recipes.create.deploying(incomplete_pickup_upgrade,[incomplete_pickup_upgrade,'create:smart_chute']),
        event.recipes.create.deploying(incomplete_pickup_upgrade,[incomplete_pickup_upgrade,'minecraft:redstone']),
        event.recipes.create.deploying(incomplete_pickup_upgrade,[incomplete_pickup_upgrade,'create:electron_tube']),
        event.recipes.create.deploying(incomplete_pickup_upgrade,[incomplete_pickup_upgrade,'#forge:plates/gold'])
        ]).transitionalItem(incomplete_pickup_upgrade).loops(1)
    event.recipes.create.deploying('sophisticatedbackpacks:magnet_upgrade','sophisticatedbackpacks:pickup_upgrade','minecraft:lodestone')
    event.recipes.create.deploying('sophisticatedbackpacks:advanced_magnet_upgrade','sophisticatedbackpacks:advanced_pickup_upgrade','create_sa:copper_magnet')
    const incomplete_pump_upgrade = 'techrevival:incomplete_advanced_pump_upgrade'
    event.recipes.create.sequenced_assembly(
        [Item.of('sophisticatedbackpacks:advanced_pump_upgrade').withChance(1.0)],
        'sophisticatedbackpacks:pump_upgrade',[
        event.recipes.create.deploying(incomplete_pump_upgrade,[incomplete_pump_upgrade,'create:mechanical_pump']),
        event.recipes.create.deploying(incomplete_pump_upgrade,[incomplete_pump_upgrade,'minecraft:redstone']),
        event.recipes.create.deploying(incomplete_pump_upgrade,[incomplete_pump_upgrade,'create:electron_tube']),
        event.recipes.create.deploying(incomplete_pump_upgrade,[incomplete_pump_upgrade,'#forge:plates/gold'])
        ]).transitionalItem(incomplete_pump_upgrade).loops(1)
    const incomplete_refill_upgrade = 'techrevival:incomplete_advanced_refill_upgrade'
    event.recipes.create.sequenced_assembly(
        [Item.of('sophisticatedbackpacks:advanced_refill_upgrade').withChance(1.0)],
        'sophisticatedbackpacks:refill_upgrade',[
        event.recipes.create.deploying(incomplete_refill_upgrade,[incomplete_refill_upgrade,'techrevival:refill_core']),
        event.recipes.create.deploying(incomplete_refill_upgrade,[incomplete_refill_upgrade,'minecraft:redstone']),
        event.recipes.create.deploying(incomplete_refill_upgrade,[incomplete_refill_upgrade,'create:electron_tube']),
        event.recipes.create.deploying(incomplete_refill_upgrade,[incomplete_refill_upgrade,'#forge:plates/gold'])
        ]).transitionalItem(incomplete_refill_upgrade).loops(1)
    const incomplete_restock_upgrade = 'techrevival:incomplete_advanced_restock_upgrade'
    event.recipes.create.sequenced_assembly(
        [Item.of('sophisticatedbackpacks:advanced_restock_upgrade').withChance(1.0)],
        'sophisticatedbackpacks:restock_upgrade',[
        event.recipes.create.deploying(incomplete_restock_upgrade,[incomplete_restock_upgrade,'create:brass_funnel']),
        event.recipes.create.deploying(incomplete_restock_upgrade,[incomplete_restock_upgrade,'minecraft:redstone']),
        event.recipes.create.deploying(incomplete_restock_upgrade,[incomplete_restock_upgrade,'create:electron_tube']),
        event.recipes.create.deploying(incomplete_restock_upgrade,[incomplete_restock_upgrade,'#forge:plates/gold'])
        ]).transitionalItem(incomplete_restock_upgrade).loops(1)
    const incomplete_tool_swapper_upgrade = 'techrevival:incomplete_advanced_tool_swapper_upgrade'
    event.recipes.create.sequenced_assembly(
        [Item.of('sophisticatedbackpacks:advanced_tool_swapper_upgrade').withChance(1.0)],
        'sophisticatedbackpacks:tool_swapper_upgrade',[
        event.recipes.create.deploying(incomplete_tool_swapper_upgrade,[incomplete_tool_swapper_upgrade,'techrevival:refill_core']),
        event.recipes.create.deploying(incomplete_tool_swapper_upgrade,[incomplete_tool_swapper_upgrade,'minecraft:redstone']),
        event.recipes.create.deploying(incomplete_tool_swapper_upgrade,[incomplete_tool_swapper_upgrade,'create:electron_tube']),
        event.recipes.create.deploying(incomplete_tool_swapper_upgrade,[incomplete_tool_swapper_upgrade,'#forge:plates/gold'])
        ]).transitionalItem(incomplete_tool_swapper_upgrade).loops(1)
    const incomplete_void_upgrade = 'techrevival:incomplete_advanced_void_upgrade'
    event.recipes.create.sequenced_assembly(
        [Item.of('sophisticatedbackpacks:advanced_void_upgrade').withChance(1.0)],
        'sophisticatedbackpacks:void_upgrade',[
            event.recipes.create.deploying(incomplete_void_upgrade,[incomplete_void_upgrade,'refinedstorage:destruction_core']),
        event.recipes.create.deploying(incomplete_void_upgrade,[incomplete_void_upgrade,'minecraft:redstone']),
        event.recipes.create.deploying(incomplete_void_upgrade,[incomplete_void_upgrade,'create:electron_tube']),
        event.recipes.create.deploying(incomplete_void_upgrade,[incomplete_void_upgrade,'#forge:plates/gold'])
        ]).transitionalItem(incomplete_void_upgrade).loops(1)
    
})
