// All the info is extracted from this site:
// https://animalcrossing.fandom.com/wiki/Fish_(New_Horizons)

/**
 * TODO:
 * - Check what the actual price of "Cherry salmon" (800 or 1000)
 * - Check the actual spawnTime of "Blowfish" (9 PM - 4 AM or 6 PM - 4 AM)
 */

(function() {
    const northernHemisphereFishData = `Bitterling	NH-Icon-bitterling	900	River	1	All day	✓	✓	✓	-	-	-	-	-	-	-	✓	✓
Pale chub	NH-Icon-palechub	200	River	1	9 AM - 4 PM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Crucian carp	NH-Icon-cruciancarp	160	River	2	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Dace	NH-Icon-dace	240	River	3	4 PM - 9 AM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Carp	NH-Icon-carp	300	Pond	4	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Koi	NH-Icon-koi	4000	Pond	4	4 PM - 9 AM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Goldfish	NH-Icon-goldfish	1300	Pond	1	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Pop-eyed goldfish	NH-Icon-popeyedgoldfish	1300	Pond	1	9 AM - 4 PM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Ranchu goldfish	NH-Icon-ranchugoldfish	4500	Pond	2	9 AM - 4 PM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Killifish	NH-Icon-killifish	300	Pond	1	All day	-	-	-	✓	✓	✓	✓	✓	-	-	-	-
Crawfish	NH-Icon-crawfish	200	Pond	2	All day	-	-	-	✓	✓	✓	✓	✓	✓	-	-	-
Soft-shelled turtle	NH-Icon-softshelledturtle	3750	River	4	4 PM - 9 AM	-	-	-	-	-	-	-	✓	✓	-	-	-
Snapping Turtle	NH-Icon-snappingturtle	5000	River	4	9 PM - 4 AM	-	-	-	✓	✓	✓	✓	✓	✓	✓	-	-
Tadpole	NH-Icon-tadpole	100	Pond	1	All day	-	-	✓	✓	✓	✓	✓	-	-	-	-	-
Frog	NH-Icon-frog	120	Pond	2	All day	-	-	-	-	✓	✓	✓	✓	-	-	-	-
Freshwater goby	NH-Icon-freshwatergoby	400	River	2	4 PM - 9 AM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Loach	NH-Icon-loach	400	River	2	All day	-	-	✓	✓	✓	-	-	-	-	-	-	-
Catfish	NH-Icon-catfish	800	Pond	4	4 PM - 9 AM	-	-	-	-	✓	✓	✓	✓	✓	✓	-	-
Giant snakehead	NH-Icon-giantsnakehead	5500	Pond	4	9 AM - 4 PM	-	-	-	-	-	✓	✓	✓	-	-	-	-
Bluegill	NH-Icon-bluegill	180	River	2	9 AM - 4 PM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Yellow perch	NH-Icon-yellowperch	300	River	3	All day	✓	✓	✓	-	-	-	-	-	-	✓	✓	✓
Black bass	NH-Icon-blackbass	400	River	4	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Tilapia	NH-Icon-tilapia	800	River	3	All day	-	-	-	-	-	✓	✓	✓	✓	✓	-	-
Pike	NH-Icon-pike	1800	River	5	All day	-	-	-	-	-	-	-	-	✓	✓	✓	✓
Pond smelt	NH-Icon-pondsmelt	500	River	2	All day	✓	✓	-	-	-	-	-	-	-	-	-	✓
Sweetfish	NH-Icon-sweetfish	900	River	3	All day	-	-	-	-	-	-	✓	✓	✓	-	-	-
Cherry salmon	NH-Icon-cherrysalmon	800	River (Clifftop)	3	4 PM - 9 AM	-	-	✓	✓	✓	✓	-	-	✓	✓	✓	-
Char	NH-Icon-char	3800	River (Clifftop) Pond	3	4 PM - 9 AM	-	-	✓	✓	✓	✓	-	-	✓	✓	✓	-
Golden trout	NH-Icon-goldentrout	15000	River (Clifftop)	3	4 PM - 9 AM	-	-	✓	✓	✓	-	-	-	✓	✓	✓	-
Stringfish	NH-Icon-stringfish	15000	River (Clifftop)	5	4 PM - 9 AM	✓	✓	✓	-	-	-	-	-	-	-	-	✓
Salmon	NH-Icon-salmon	700	River (Mouth)	4	All day	-	-	-	-	-	-	-	-	✓	-	-	-
King salmon	NH-Icon-kingsalmon	1800	River (Mouth)	6	All day	-	-	-	-	-	-	-	-	✓	-	-	-
Mitten crab	NH-Icon-mittencrab	2000	River	2	4 PM - 9 AM	-	-	-	-	-	-	-	-	✓	✓	✓	-
Guppy	NH-Icon-guppy	1300	River	1	9 AM - 4 PM	-	-	-	✓	✓	✓	✓	✓	✓	✓	✓	-
Nibble fish	NH-Icon-nibblefish	1500	River	1	9 AM - 4 PM	-	-	-	-	✓	✓	✓	✓	✓	-	-	-
Angelfish	NH-Icon-angelfish	3000	River	2	4 PM - 9 AM	-	-	-	-	✓	✓	✓	✓	✓	✓	-	-
Betta	NH-Icon-betta	2500	River	2	9 AM - 4 PM	-	-	-	-	✓	✓	✓	✓	✓	✓	-	-
Neon tetra	NH-Icon-neontetra	500	River	1	9 AM - 4 PM	-	-	-	✓	✓	✓	✓	✓	✓	✓	✓	-
Rainbowfish	NH-Icon-rainbowfish	800	River	1	9 AM - 4 PM	-	-	-	-	✓	✓	✓	✓	✓	✓	-	-
Piranha	NH-Icon-piranha	2500	River	2	9 AM - 4 PM & 9 PM - 4 AM	-	-	-	-	-	✓	✓	✓	✓	-	-	-
Arowana	NH-Icon-arowana	10000	River	4	4 PM - 9 AM	-	-	-	-	-	✓	✓	✓	✓	-	-	-
Dorado	NH-Icon-dorado	15000	River	5	4 AM - 9 PM	-	-	-	-	-	✓	✓	✓	✓	-	-	-
Gar	NH-Icon-gar	6000	Pond	5	4 PM - 9 AM	-	-	-	-	-	✓	✓	✓	✓	-	-	-
Arapaima	NH-Icon-arapaima	10000	River	6	4 PM - 9 AM	-	-	-	-	-	✓	✓	✓	✓	-	-	-
Saddled bichir	NH-Icon-saddledbichir	4000	River	4	9 PM - 4 AM	-	-	-	-	-	✓	✓	✓	✓	-	-	-
Sturgeon	NH-Icon-sturgeon	10000	River (Mouth)	6	All day	✓	✓	✓	-	-	-	-	-	✓	✓	✓	✓
Sea butterfly	NH-Icon-seabutterfly	1000	Sea	1	All day	✓	✓	✓	-	-	-	-	-	-	-	-	✓
Sea horse	NH-Icon-seahorse	1100	Sea	1	All day	-	-	-	✓	✓	✓	✓	✓	✓	✓	✓	-
Clown fish	NH-Icon-clownfish	650	Sea	1	All day	-	-	-	✓	✓	✓	✓	✓	✓	-	-	-
Surgeonfish	NH-Icon-surgeonfish	1000	Sea	2	All day	-	-	-	✓	✓	✓	✓	✓	✓	-	-	-
Butterfly fish	NH-Icon-butterflyfish	1000	Sea	2	All day	-	-	-	✓	✓	✓	✓	✓	✓	-	-	-
Napoleonfish	NH-Icon-napoleonfish	10000	Sea	6	4 AM - 9 PM	-	-	-	-	-	-	✓	✓	-	-	-	-
Zebra turkeyfish	NH-Icon-zebraturkeyfish	500	Sea	3	All day	-	-	-	✓	✓	✓	✓	✓	✓	✓	✓	-
Blowfish	NH-Icon-blowfish	5000	Sea	3	9 PM - 4 AM	✓	✓	-	-	-	-	-	-	-	-	✓	✓
Puffer fish	NH-Icon-pufferfish	250	Sea	3	All day	-	-	-	-	-	-	✓	✓	✓	-	-	-
Anchovy	NH-Icon-anchovy	200	Sea	2	4 AM - 9 PM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Horse mackerel	NH-Icon-horsemackerel	150	Sea	2	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Barred knifejaw	NH-Icon-barredknifejaw	5000	Sea	3	All day	-	-	✓	✓	✓	✓	✓	✓	✓	✓	✓	-
Sea bass	NH-Icon-seabass	400	Sea	5	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Red snapper	NH-Icon-redsnapper	3000	Sea	4	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Dab	NH-Icon-dab	300	Sea	3	All day	✓	✓	✓	✓	-	-	-	-	-	✓	✓	✓
Olive flounder	NH-Icon-oliveflounder	800	Sea	5	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Squid	NH-Icon-squid	500	Sea	3	All day	✓	✓	✓	✓	✓	✓	✓	✓	-	-	-	✓
Moray eel	NH-Icon-morayeel	2000	Sea	Narrow	All day	-	-	-	-	-	-	-	✓	✓	✓	-	-
Ribbon eel	NH-Icon-ribboneel	600	Sea	Narrow	All day	-	-	-	-	-	✓	✓	✓	✓	✓	-	-
Tuna	NH-Icon-tuna	7000	Pier	6	All day	✓	✓	✓	✓	-	-	-	-	-	-	✓	✓
Blue marlin	NH-Icon-bluemarlin	10000	Pier	6	All day	✓	✓	✓	✓	-	-	✓	✓	✓	-	✓	✓
Giant trevally	NH-Icon-gianttrevally	4500	Pier	5	All day	-	-	-	-	✓	✓	✓	✓	✓	✓	-	-
Mahi-mahi	NH-Icon-mahimahi	6000	Pier	5	All day	-	-	-	-	✓	✓	✓	✓	✓	✓	-	-
Ocean sunfish	NH-Icon-oceansunfish	4000	Sea	6 (Fin)	4 AM - 9 PM	-	-	-	-	-	-	✓	✓	✓	-	-	-
Ray	NH-Icon-ray	3000	Sea	5	4 AM - 9 PM	-	-	-	-	-	-	-	✓	✓	✓	✓	-
Saw shark	NH-Icon-sawshark	12000	Sea	6 (Fin)	4 PM - 9 AM	-	-	-	-	-	✓	✓	✓	✓	-	-	-
Hammerhead shark	NH-Icon-hammerheadshark	8000	Sea	6 (Fin)	4 PM - 9 AM	-	-	-	-	-	✓	✓	✓	✓	-	-	-
Great white shark	NH-Icon-greatwhiteshark	15000	Sea	6 (Fin)	4 PM - 9 AM	-	-	-	-	-	✓	✓	✓	✓	-	-	-
Whale shark	NH-Icon-whaleshark	13000	Sea	6 (Fin)	All day	-	-	-	-	-	✓	✓	✓	✓	-	-	-
Suckerfish	NH-Icon-suckerfish	1500	Sea	4 (Fin)	All day	-	-	-	-	-	✓	✓	✓	✓	-	-	-
Football fish	NH-Icon-footballfish	2500	Sea	4	4 PM - 9 AM	✓	✓	✓	-	-	-	-	-	-	-	✓	✓
Oarfish	NH-Icon-oarfish	9000	Sea	6	All day	✓	✓	✓	✓	✓	-	-	-	-	-	-	✓
Barreleye	NH-Icon-barreleye	15000	Sea	2	9 PM - 4 AM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Coelacanth	NH-Icon-coelacanth	15000	Sea (while raining)	6	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓`;

    const southernHemisphereFishData = `Bitterling	NH-Icon-bitterling	900	River	1	All day	-	-	-	-	✓	✓	✓	✓	✓	-	-	-
Pale chub	NH-Icon-palechub	200	River	1	9 AM - 4 PM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Crucian carp	NH-Icon-cruciancarp	160	River	2	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Dace	NH-Icon-dace	240	River	3	4 PM - 9 AM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Carp	NH-Icon-carp	300	Pond	4	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Koi	NH-Icon-koi	4000	Pond	4	4 PM - 9 AM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Goldfish	NH-Icon-goldfish	1300	Pond	1	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Pop-eyed goldfish	NH-Icon-popeyedgoldfish	1300	Pond	1	9 AM - 4 PM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Ranchu goldfish	NH-Icon-ranchugoldfish	4500	Pond	2	9 AM - 4 PM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Killifish	NH-Icon-killifish	300	Pond	1	All day	✓	✓	-	-	-	-	-	-	-	✓	✓	✓
Crawfish	NH-Icon-crawfish	200	Pond	2	All day	✓	✓	✓	-	-	-	-	-	-	✓	✓	✓
Soft-shelled turtle	NH-Icon-softshelledturtle	3750	River	4	4 PM - 9 AM	-	✓	✓	-	-	-	-	-	-	-	-	-
Snapping Turtle	NH-Icon-snappingturtle	5000	River	4	9 PM - 4 AM	✓	✓	✓	✓	-	-	-	-	-	✓	✓	✓
Tadpole	NH-Icon-tadpole	100	Pond	1	All day	✓	-	-	-	-	-	-	-	✓	✓	✓	✓
Frog	NH-Icon-frog	120	Pond	2	All day	✓	✓	-	-	-	-	-	-	-	-	✓	✓
Freshwater goby	NH-Icon-freshwatergoby	400	River	2	4 PM - 9 AM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Loach	NH-Icon-loach	400	River	2	All day	-	-	-	-	-	-	-	-	✓	✓	✓	-
Catfish	NH-Icon-catfish	800	Pond	4	4 PM - 9 AM	✓	✓	✓	✓	-	-	-	-	-	-	✓	✓
Giant snakehead	NH-Icon-giantsnakehead	5500	Pond	4	9 AM - 4 PM	✓	✓	-	-	-	-	-	-	-	-	-	✓
Bluegill	NH-Icon-bluegill	180	River	2	9 AM - 4 PM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Yellow perch	NH-Icon-yellowperch	300	River	3	All day	-	-	-	✓	✓	✓	✓	✓	✓	-	-	-
Black bass	NH-Icon-blackbass	400	River	4	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Tilapia	NH-Icon-tilapia	800	River	3	All day	✓	✓	✓	✓	-	-	-	-	-	-	-	✓
Pike	NH-Icon-pike	1800	River	5	All day	-	-	✓	✓	✓	✓	-	-	-	-	-	-
Pond smelt	NH-Icon-pondsmelt	500	River	2	All day	-	-	-	-	-	✓	✓	✓	-	-	-	-
Sweetfish	NH-Icon-sweetfish	900	River	3	All day	✓	✓	✓	-	-	-	-	-	-	-	-	-
Cherry salmon	NH-Icon-cherrysalmon	800	River (Clifftop)	3	4 PM - 9 AM	-	-	✓	✓	✓	-	-	-	✓	✓	✓	✓
Char	NH-Icon-char	3800	River (Clifftop) Pond	3	4 PM - 9 AM	-	-	✓	✓	✓	-	-	-	✓	✓	✓	✓
Golden trout	NH-Icon-goldentrout	15000	River (Clifftop)	3	4 PM - 9 AM	-	-	✓	✓	✓	-	-	-	✓	✓	✓	-
Stringfish	NH-Icon-stringfish	15000	River (Clifftop)	5	4 PM - 9 AM	-	-	-	-	-	✓	✓	✓	✓	-	-	-
Salmon	NH-Icon-salmon	700	River (Mouth)	4	All day	-	-	✓	-	-	-	-	-	-	-	-	-
King salmon	NH-Icon-kingsalmon	1800	River (Mouth)	6	All day	-	-	✓	-	-	-	-	-	-	-	-	-
Mitten crab	NH-Icon-mittencrab	2000	River	2	4 PM - 9 AM	-	-	✓	✓	✓	-	-	-	-	-	-	-
Guppy	NH-Icon-guppy	1300	River	1	9 AM - 4 PM	✓	✓	✓	✓	✓	-	-	-	-	✓	✓	✓
Nibble fish	NH-Icon-nibblefish	1500	River	1	9 AM - 4 PM	✓	✓	✓	-	-	-	-	-	-	-	✓	✓
Angelfish	NH-Icon-angelfish	3000	River	2	4 PM - 9 AM	✓	✓	✓	✓	-	-	-	-	-	-	✓	✓
Betta	NH-Icon-betta	2500	River	2	9 AM - 4 PM	✓	✓	✓	✓	-	-	-	-	-	-	✓	✓
Neon tetra	NH-Icon-neontetra	500	River	1	9 AM - 4 PM	✓	✓	✓	✓	✓	-	-	-	-	✓	✓	✓
Rainbowfish	NH-Icon-rainbowfish	800	River	1	9 AM - 4 PM	✓	✓	✓	✓	-	-	-	-	-	-	✓	✓
Piranha	NH-Icon-piranha	2500	River	2	9 AM - 4 PM & 9 PM - 4 AM	✓	✓	✓	-	-	-	-	-	-	-	-	✓
Arowana	NH-Icon-arowana	10000	River	4	4 PM - 9 AM	✓	✓	✓	-	-	-	-	-	-	-	-	✓
Dorado	NH-Icon-dorado	15000	River	5	4 AM - 9 PM	✓	✓	✓	-	-	-	-	-	-	-	-	✓
Gar	NH-Icon-gar	6000	Pond	5	4 PM - 9 AM	✓	✓	✓	-	-	-	-	-	-	-	-	✓
Arapaima	NH-Icon-arapaima	10000	River	6	4 PM - 9 AM	✓	✓	✓	-	-	-	-	-	-	-	-	✓
Saddled bichir	NH-Icon-saddledbichir	4000	River	4	9 PM - 4 AM	✓	✓	✓	-	-	-	-	-	-	-	-	✓
Sturgeon	NH-Icon-sturgeon	10000	River (Mouth)	6	All day	-	-	✓	✓	✓	✓	✓	✓	✓	-	-	-
Sea butterfly	NH-Icon-seabutterfly	1000	Sea	1	All day	-	-	-	-	-	✓	✓	✓	✓	-	-	-
Sea horse	NH-Icon-seahorse	1100	Sea	1	All day	✓	✓	✓	✓	✓	-	-	-	-	✓	✓	✓
Clown fish	NH-Icon-clownfish	650	Sea	1	All day	✓	✓	✓	-	-	-	-	-	-	✓	✓	✓
Surgeonfish	NH-Icon-surgeonfish	1000	Sea	2	All day	✓	✓	✓	-	-	-	-	-	-	✓	✓	✓
Butterfly fish	NH-Icon-butterflyfish	1000	Sea	2	All day	✓	✓	✓	-	-	-	-	-	-	✓	✓	✓
Napoleonfish	NH-Icon-napoleonfish	10000	Sea	6	4 AM - 9 PM	✓	✓	-	-	-	-	-	-	-	-	-	-
Zebra turkeyfish	NH-Icon-zebraturkeyfish	500	Sea	3	All day	✓	✓	✓	✓	✓	-	-	-	-	✓	✓	✓
Blowfish	NH-Icon-blowfish	5000	Sea	3	9 PM - 4 AM	-	-	-	-	✓	✓	✓	✓	-	-	-	-
Puffer fish	NH-Icon-pufferfish	250	Sea	3	All day	✓	✓	✓	-	-	-	-	-	-	-	-	-
Anchovy	NH-Icon-anchovy	200	Sea	2	4 AM - 9 PM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Horse mackerel	NH-Icon-horsemackerel	150	Sea	2	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Barred knifejaw	NH-Icon-barredknifejaw	5000	Sea	3	All day	✓	✓	✓	✓	✓	-	-	-	✓	✓	✓	✓
Sea bass	NH-Icon-seabass	400	Sea	5	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Red snapper	NH-Icon-redsnapper	3000	Sea	4	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Dab	NH-Icon-dab	300	Sea	3	All day	-	-	-	✓	✓	✓	✓	✓	✓	✓	-	-
Olive flounder	NH-Icon-oliveflounder	800	Sea	5	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Squid	NH-Icon-squid	500	Sea	3	All day	✓	✓	-	-	-	✓	✓	✓	✓	✓	✓	✓
Moray eel	NH-Icon-morayeel	2000	Sea	8	All day	-	✓	✓	✓	-	-	-	-	-	-	-	-
Ribbon eel	NH-Icon-ribboneel	600	Sea	8	All day	✓	✓	✓	✓	-	-	-	-	-	-	-	✓
Tuna	NH-Icon-tuna	7000	Pier	6	All day	-	-	-	-	✓	✓	✓	✓	✓	✓	-	-
Blue marlin	NH-Icon-bluemarlin	10000	Pier	6	All day	✓	✓	✓	-	✓	✓	✓	✓	✓	✓	-	-
Giant trevally	NH-Icon-gianttrevally	4500	Pier	5	All day	✓	✓	✓	✓	-	-	-	-	-	-	✓	✓
Mahi-mahi	NH-Icon-mahimahi	6000	Pier	5	All day	✓	✓	✓	✓	-	-	-	-	-	-	✓	✓
Ocean sunfish	NH-Icon-oceansunfish	4000	Sea	7	4 AM - 9 PM	✓	✓	✓	-	-	-	-	-	-	-	-	-
Ray	NH-Icon-ray	3000	Sea	5	4 AM - 9 PM	-	✓	✓	✓	✓	-	-	-	-	-	-	-
Saw shark	NH-Icon-sawshark	12000	Sea	7	4 PM - 9 AM	✓	✓	✓	-	-	-	-	-	-	-	-	✓
Hammerhead shark	NH-Icon-hammerheadshark	8000	Sea	7	4 PM - 9 AM	✓	✓	✓	-	-	-	-	-	-	-	-	✓
Great white shark	NH-Icon-greatwhiteshark	15000	Sea	7	4 PM - 9 AM	✓	✓	✓	-	-	-	-	-	-	-	-	✓
Whale shark	NH-Icon-whaleshark	13000	Sea	7	All day	✓	✓	✓	-	-	-	-	-	-	-	-	✓
Suckerfish	NH-Icon-suckerfish	1500	Sea	9	All day	✓	✓	✓	-	-	-	-	-	-	-	-	✓
Football fish	NH-Icon-footballfish	2500	Sea	4	4 PM - 9 AM	-	-	-	-	✓	✓	✓	✓	✓	-	-	-
Oarfish	NH-Icon-oarfish	9000	Sea	6	All day	-	-	-	-	-	✓	✓	✓	✓	✓	✓	-
Barreleye	NH-Icon-barreleye	15000	Sea	2	9 PM - 4 AM	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓
Coelacanth	NH-Icon-coelacanth	15000	Sea (while raining)	6	All day	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓	✓`;

    const fishParsedData = northernHemisphereFishData.split(`\n`).map((rawRow: string) => {
        const [ name, _imgLocation, price, location, shadowSize, spawnTime, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec ] = rawRow.split(`\t`);
        return {
            name,
            price: parseInt(price),
            location,
            shadowSize,
            spawnTime,
            availability: {
                northMonths: [
                    jan === "✓",
                    feb === "✓",
                    mar === "✓",
                    apr === "✓",
                    may === "✓",
                    jun === "✓",
                    jul === "✓",
                    aug === "✓",
                    sep === "✓",
                    oct === "✓",
                    nov === "✓",
                    dec === "✓",
                ],
            },
        };
    });

    southernHemisphereFishData.split(`\n`).forEach((rawRow: string) => {
        const [ name, _imgLocation, price, location, shadowSize, spawnTime, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec ] = rawRow.split(`\t`);
        const fish = fishParsedData.find(row => row.name === name) as any;

        if (!fish) throw `ERROR: Couldn't find fish: ${name}`;
        if (parseInt(price) !== fish.price) throw `ERROR: Fish: ${name} had mismatching price`;
        // if (location !== fish.location) throw `ERROR: Fish: ${name} had mismatching location`;
        if (spawnTime !== fish.spawnTime) throw `ERROR: Fish: ${name} had mismatching spawnTime`;

        fish.availability.southMonths = [
            jan === "✓",
            feb === "✓",
            mar === "✓",
            apr === "✓",
            may === "✓",
            jun === "✓",
            jul === "✓",
            aug === "✓",
            sep === "✓",
            oct === "✓",
            nov === "✓",
            dec === "✓",
        ];
    });

    fishParsedData.forEach((fish: any) => {
        try {
            // Perform validation of hours data
            if (!(fish.spawnTime === "All day" || (/\d{1,2} (?:AM|PM) - \d{1,2} (?:AM|PM)/.test(fish.spawnTime)))) {
                throw `ERROR: fish: ${fish.name} had an invalid spawnTime: ${fish.spawnTime}`
            }

            let hours: boolean[] = Array(24).fill(false);
            if (fish.spawnTime === "All day") {
                hours = Array(24).fill(true);
            } else {
                const spawns = fish.spawnTime.split(" & ");
                spawns.forEach((spawn: any) => {
                    let [ start, end ] = spawn.split(" - ");
                    (start as any) = (/PM/.test(start) ? parseInt(start) + 12 : parseInt(start)) - 1;
                    (end as any) = (/PM/.test(end) ? parseInt(end) + 12 : parseInt(end)) -  1;

                    hours.forEach((_, index) => {
                        if (end > start) {
                            if (index >= start && index <= end) { hours[index] = true }
                        } else if (end === start) {
                            hours[start] = true;
                        } else {
                            if (index >= start || index <= end) { hours[index] = true }
                        }
                    });
                })
            }

            // console.log(`fish: ${fish.name} spawnTime: ${fish.spawnTime} hours: ${hours}`);

            fish.availability.hours = hours;

            delete fish.spawnTime;
        } catch(e) {
            console.error(e);
        }
    });

    const findNotBool = (el: any) => typeof el !== typeof true;

    // Perform Final validation of data
    fishParsedData.forEach(fish => {
        if (!fish) throw `ERROR: final validation failed with undefined fish`;

        const { name, price, location, availability: { hours, northMonths, southMonths }} = fish as any;

        if (name === undefined || price === null || typeof name !== typeof "") throw `ERROR: fish: ${name} failed final validation with invalid name`;
        if (price === undefined || price === null || typeof price !== typeof 0) throw `ERROR: fish: ${name} failed final validation with invalid price`;
        if (location === undefined || location === null || typeof location !== typeof "") throw `ERROR: fish: ${name} failed final validation with invalid location`;
        if (hours === undefined || hours === null || typeof hours !== typeof [] || hours.find(findNotBool)) throw `ERROR: fish: ${name} failed final validation with invalid hours`;
        if (northMonths === undefined || northMonths === null || typeof northMonths !== typeof [] || northMonths.find(findNotBool)) throw `ERROR: fish: ${name} failed final validation with invalid northMonths`;
        if (southMonths === undefined || southMonths === null || typeof southMonths !== typeof [] || southMonths.find(findNotBool)) throw `ERROR: fish: ${name} failed final validation with invalid southMonths`;
    });

    console.log(JSON.stringify(fishParsedData));
})();
