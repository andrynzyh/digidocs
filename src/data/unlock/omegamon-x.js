const omegamonX = {
  // =========================
  // Basic Information
  // =========================
  name: "Omegamon X",
  icon: "omegamon-x.png",
  rank: "SSS+",

  // =========================
  // Required Unlock Items
  // =========================
  requiredItems: [
    {
      name: "X-Antibody Factor Omegamon Alpha",
      icon: "omega-alpha.png",
      note: "Character Bound",
    },
    {
      name: "X-Antibody Factor Omegamon Beta",
      icon: "omega-beta.png",
      note: "Character Bound",
    },
  ],

  // =========================
  // Obtain Method
  // =========================
  obtain: [
    {
      item: {
        name: "X-Antibody Factor Omegamon Alpha",
        icon: "omega-alpha.png",
      },

      description:
        ["Can be crafted at PawnChessmon White NPC in D-Terminal.",
        "Requires completing the Calumon questline."],

      materials: [
        {
          name: "Anti-Heterogen",
          icon: "anti-heterogen.png",
          amount: 20,
        },
        {
          name: "X-Evolution Disk",
          icon: "x-evolution-disk.png",
          amount: 20,
        },
        {
          name: "Death-X Disk",
          icon: "death-x-disk.png",
          amount: 20,
        },
        {
          name: "Yggdrasil's Records",
          icon: "ygg-record.png",
          amount: 20,
        },
        {
          name: "Warrior Core",
          icon: "warrior-core.png",
          amount: 90,
        },
      ],

      cost: "5 Tera",
    },

    {
      item: {
        name: "X-Antibody Factor Omegamon Beta",
        icon: "omega-beta.png",
      },

      description:
        "Drops from the limited Cash Shop gamble box.",
    },
  ],

  // =========================
  // Quest
  // =========================
    quest: {
      requirements: [
        "Agumon (Classic) Lv99",
        "Omegamon unlocked",
        "WarGreymon X unlocked",
        "Tamer Lv99",
      ],

      steps: [
  {
    text: "Defeat 5 Dorumon, Dracmon, Kunemon and FanBeemon.",

    admonition: {
      type: "info",
      title: "Daily Quest",
      content: "This quest can only be completed once per day."
    }
  },

  {
  text: "Collect 10 Yggdrasil's Records.",

  admonitions: [
    {
      type: "warning",
      title: "Consumed",
      content: "10 Records are consumed by the quest."
    },
    {
      type: "info",
      title: "Tip",
      content: "They are returned after changing channel."
    }
  ]
}
]
    },

  // =========================
  // Crafting
  // =========================
  crafting: {
  cost: "5 Tera",

  success: "100%",

  materials: [
    {
      name: "Anti-Heterogen",
      icon: "anti-heterogen.png",
      amount: 20,
    },
    {
      name: "X-Evolution Disk",
      icon: "x-evolution-disk.png",
      amount: 20,
    },
    {
      name: "Death-X Disk",
      icon: "death-x-disk.png",
      amount: 20,
    },
    {
      name: "Yggdrasil's Records",
      icon: "ygg-record.png",
      amount: 20,
    },
    {
      name: "Warrior Core",
      icon: "warrior-core.png",
      amount: 90,
    },
  ],
},

  // =========================
  // Notes
  // =========================
notes: [
  {
    type: "warning",
    title: "Character Bound",
    content: "X-Antibody Factor Omegamon Alpha is Character Bound."
  },
  {
    type: "info",
    title: "Quest Requirement",
    content: "Although the quest only asks for 10 of each quest item, you need 30 in total because 20 more are required for crafting."
  },
  {
    type: "tip",
    title: "Yggdrasil's Records",
    content: "10 Records consumed by the quest are returned after changing channel."
  }
],
};

export default omegamonX;