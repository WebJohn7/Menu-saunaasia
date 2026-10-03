const fs=require("fs"), assert=require("assert");
const src=fs.readFileSync("assets/js/app.js","utf8");
// Load only the pure-helper section (no DOM needed).
const pure=src.slice(src.indexOf("function fold"), src.indexOf("/* ---------- small DOM helpers"));
eval(pure);

const menu=JSON.parse(fs.readFileSync("data/menu.json","utf8"));
const dishes=allDishes(menu);
dishes.forEach(d=>d.index=searchIndex(d));
const by=n=>dishes.find(d=>d.number===n);
const none={noMeat:false,spicy:false};
const find=(q,f=none)=>dishes.filter(d=>matches(d,q,f)).map(d=>d.number);

let pass=0, fail=0;
function t(name,fn){ try{ fn(); console.log("  ok   "+name); pass++; } catch(e){ console.log("  FAIL "+name+"\n       "+e.message); fail++; } }

console.log("\nfold / diacritics");
t("strips diacritics", ()=>assert.strictEqual(fold("Polévka Rýže"),"polevka ryze"));

console.log("\nsearch by number");
t("'22' finds dish 22", ()=>assert.ok(find("22").includes("22")));
t("'5A' finds 5A", ()=>assert.ok(find("5A").includes("5A")));
t("'1' prefix-matches 1 and the teens", ()=>{ const r=find("1"); assert.ok(r.includes("1")&&r.includes("13")&&r.includes("19")); });
t("'33' finds only 33", ()=>assert.deepStrictEqual(find("33"),["33"]));

console.log("\nsearch by text");
t("'pho' finds the pho dishes", ()=>{ const r=find("pho"); ["6","13","14","15","17"].forEach(n=>assert.ok(r.includes(n),"missing "+n)); });
t("diacritic-free 'kureci' finds chicken dishes", ()=>assert.ok(find("kureci").length>10));
t("'krevet' finds shrimp dishes", ()=>assert.ok(find("krevet").includes("4")));
t("nonsense finds nothing", ()=>assert.deepStrictEqual(find("qqqzzz"),[]));
t("empty query returns all 32", ()=>assert.strictEqual(find("").length,32));

console.log("\nfilters");
t("spicy filter → 7, 8, 25", ()=>assert.deepStrictEqual(find("",{noMeat:false,spicy:true}).sort(),["25","7","8"].sort()));
t("noMeat includes the two Vege dishes", ()=>{ const r=find("",{noMeat:true,spicy:false}); assert.ok(r.includes("26")&&r.includes("28")); });
t("noMeat surfaces tofu-variant dishes too", ()=>{ const r=find("",{noMeat:true,spicy:false}); ["1","13","17","32","12"].forEach(n=>assert.ok(r.includes(n),"missing "+n)); });
t("noMeat excludes meat-only dishes", ()=>{ const r=find("",{noMeat:true,spicy:false}); ["10","14","15","33"].forEach(n=>assert.ok(!r.includes(n),"should exclude "+n)); });
t("combined query+filter narrows", ()=>{ const r=find("pho",{noMeat:true,spicy:false}); assert.ok(r.includes("13")&&!r.includes("14")); });

console.log("\nCzech plurals");
t("1 → jídlo", ()=>assert.strictEqual(plural(1,menu.ui),"jídlo"));
t("3 → jídla", ()=>assert.strictEqual(plural(3,menu.ui),"jídla"));
t("12 → jídel", ()=>assert.strictEqual(plural(12,menu.ui),"jídel"));
t("0 → jídel", ()=>assert.strictEqual(plural(0,menu.ui),"jídel"));

console.log("\ndata integrity");
t("32 dishes total", ()=>assert.strictEqual(dishes.length,32));
t("20 dishes carry variants", ()=>assert.strictEqual(dishes.filter(d=>d.variants).length,20));
t("Pho #13 has 4 variants, cheapest 110", ()=>{ const d=by("13"); assert.strictEqual(d.variants.length,4); assert.strictEqual(Math.min(...d.variants.map(v=>v.price)),110); });
t("Curry #12 has 6 variants up to 220", ()=>{ const d=by("12"); assert.strictEqual(d.variants.length,6); assert.strictEqual(Math.max(...d.variants.map(v=>v.price)),220); });
t("Duck #33 has 5 side variants", ()=>{ const d=by("33"); assert.strictEqual(d.variants.length,5); assert.strictEqual(d.variantType,"side"); });
t("Shrimps #4 is a quantity variant", ()=>assert.strictEqual(by("4").variantType,"quantity"));
t("every dish has a photo file", ()=>dishes.forEach(d=>assert.ok(fs.existsSync("assets/img/dishes/"+d.image+".webp"),d.number)));

console.log("\ncategory placement (the user's spec)");
const spec={predkrmy:["1","2","3","4","5","5A"],polevky:["6","7","8","9","13","14","15"],nudle:["10","11","16","17","18","19","20","21","32"],"ryzova-jidla":["12","22","23","25","31"],vegetarian:["26","28"],krupava:["29","33","34"]};
Object.entries(spec).forEach(([id,nums])=>{
  t(id+" holds exactly "+nums.join(", "), ()=>{
    const got=menu.categories.find(c=>c.id===id).items.map(i=>i.number);
    assert.deepStrictEqual(got,nums);
  });
});

console.log("\n"+pass+" passed, "+fail+" failed\n");
process.exit(fail?1:0);
