elements.vanilla = {
    color: ["#080301","#120602","#1c0b06"],
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
	burn: 3,
    burnTime: 10,
	burnInto: ["ash","fragrance"],
	reactions: {
        "dough": { elem1:"incense", elem2:"incense", chance:0.1 },
        "herb": { elem1:"incense", elem2:"incense", chance:0.1 }
    },
}

