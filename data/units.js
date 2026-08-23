/**
 * Course registry
 *
 * To publish a unit, add its data file and change `status` to "available"
 * with the matching `module` path. The interface, activities, progress, and
 * navigation will update automatically.
 */
export const unitsRegistry = [
  { id: "unit-1", number: 1, title: "Great Places to Be", icon: "🌎", status: "available", module: "./data/unit1.js" },
  { id: "unit-2", number: 2, title: "People's Lives", icon: "👥", status: "available", module: "./data/unit2.js" },
  { id: "unit-3", number: 3, title: "Getting from A to B", icon: "🚌", status: "available", module: "./data/unit3.js" },
  { id: "unit-4", number: 4, title: "It Was All New Once", icon: "💡", status: "available", module: "./data/unit4.js" },
  { id: "unit-5", number: 5, title: "Animal World", icon: "🦁", status: "available", module: "./data/unit5.js" },
  { id: "unit-6", number: 6, title: "Being Human", icon: "🧠", status: "available", module: "./data/unit6.js" },
  { id: "unit-7", number: 7, title: "Literacy Skills", icon: "📚", status: "available", module: "./data/unit7.js" },
  { id: "unit-8", number: 8, title: "Tourist Attractions", icon: "🗺️", status: "available", module: "./data/unit8.js" },
  { id: "unit-9", number: 9, title: "Every Drop Counts", icon: "💧", status: "available", module: "./data/unit9.js" },
  { id: "unit-10", number: 10, title: "Building Design", icon: "🏛️", status: "available", module: "./data/unit10.js" }
];

export function availableUnits() {
  return unitsRegistry.filter((unit) => unit.status === "available" && unit.module);
}
