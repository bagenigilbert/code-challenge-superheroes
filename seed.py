from app import app, db
from app.models import Hero, Power, HeroPower
import random

# Create an application context
with app.app_context():
    # Clear existing data
    db.session.query(HeroPower).delete()
    db.session.query(Hero).delete()
    db.session.query(Power).delete()

    # Seeding powers
    powers_data = [
        {"name": "Captain Invincible", "description": "Invulnerability"},
        {"name": "Phoenix Blaze", "description": "Pyrokinesis and Flight"},
        {"name": "Mega Mind", "description": "Super Intelligence"},
        {"name": "Aqua Guardian", "description": "Hydrokinesis and Underwater Adaptation"},
        {"name": "Teleporta", "description": "Teleportation"},
        {"name": "Invisible Specter", "description": "Invisibility and Telepathy"},
        {"name": "Eternal Guardian", "description": "Immortality and Regeneration"},
        {"name": "Time Warp", "description": "Time Manipulation"},
        {"name": "Lightning Strike", "description": "Electricity Manipulation and Super Speed"},
        {"name": "Diamond Fist", "description": "Super Strength and Durability"}
    ]

    powers = [Power(**data) for data in powers_data]
    db.session.bulk_save_objects(powers)

    # Seeding heroes
    heroes_data = [
        {"name": "Captain Invincible", "super_name": "Captain Invincible"},
        {"name": "Phoenix Blaze", "super_name": "Phoenix Blaze"},
        {"name": "Mega Mind", "super_name": "Mega Mind"},
        {"name": "Aqua Guardian", "super_name": "Aqua Guardian"},
        {"name": "Teleporta", "super_name": "Teleporta"},
        {"name": "Invisible Specter", "super_name": "Invisible Specter"},
        {"name": "Eternal Guardian", "super_name": "Eternal Guardian"},
        {"name": "Time Warp", "super_name": "Time Warp"},
        {"name": "Lightning Strike", "super_name": "Lightning Strike"},
        {"name": "Diamond Fist", "super_name": "Diamond Fist"}
    ]

    heroes = [Hero(**data) for data in heroes_data]
    db.session.bulk_save_objects(heroes)

    # Seeding hero powers
    strengths = ["Strong", "Weak", "Average"]

    for hero in heroes:
        for _ in range(1, 4):  # Randomly assign up to 3 powers to each hero
            power = powers[random.randint(0, len(powers) - 1)]
            hero_power = HeroPower(strength=random.choice(strengths), hero=hero, power=power)
            db.session.add(hero_power)

    # Commit the changes to the database
    db.session.commit()

print("🦸‍♀️ Seeding completed!")
