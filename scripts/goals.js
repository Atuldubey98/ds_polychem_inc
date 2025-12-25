const goalList = [
  { icon: "verified", label: "Standards compliance" },
  { icon: "security", label: "Reliability" },
  { icon: "support_agent", label: "Customised chemical" },
  { icon: "bolt", label: "Agility" },
  { icon: "volunteer_activism", label: "Social Responsibility" },
  { icon: "gavel", label: "Integrity" },
  { icon: "assignment", label: "Accountability" },
  { icon: "sync", label: "Flexibility" },
  { icon: "science", label: "Green Chemistry" },
  { icon: "trending_up", label: "Evolution" },
  { icon: "local_shipping", label: "Delivery" },
  { icon: "handshake", label: "Trust" },
  { icon: "diversity_3", label: "Diversity" },
  { icon: "group_add", label: "Inclusion" },
];

const goals = document.getElementById("goals");
goalList.forEach((goalItem) => {
  const goal = document.createElement("div");
  goal.className = "goal";
  const iconSpan = document.createElement("span");
  iconSpan.className = "material-symbols-outlined";
  iconSpan.style.fontSize = "40px";
  iconSpan.innerText = goalItem.icon;
  const text = document.createElement("p");
  text.innerText = goalItem.label;
  goal.append(iconSpan);
  goal.append(text);
  goals.appendChild(goal);
});
