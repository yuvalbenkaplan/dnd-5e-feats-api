const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const feats = {
    'aberrant-dragonmark': {
        'featName': 'aberrant dragonmark',
        'featDescription': 'You have manifested an aberrant dragonmark. Determine its appearance and the flaw associated with it.',
        'abilityModified': ['constitution'],
        'prerequsite': 'no other dragonmark',
        'source': 'ebberon: rising from the last war',
        'spellsLearned': ['cantrip', '1st level'],
        'spellList': ['sorcerer'],
        'spellcastingAbility': ['constitution'],
        'featAbility': 'When you cast the 1st-level spell through your mark, you can expend one of your Hit Dice and roll it. If you roll an even number, you gain a number of temporary hit points equal to the number rolled. If you roll an odd number, one random creature within 30 feet of you (not including you) takes force damage equal to the number rolled. If no other creatures are in range, you take the damage.'
    },
    'actor': {
        'featName': 'actor',
        'featDescription': 'skilled at mimicry and dramatics',
        'abilityModified': ['charisma'],
        'skillAdvantage': ['deception', 'performance'],
        'skillAdvantageRequirement': 'trying to pass yourself off as a different person',
        'featAbility': 'you can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a listener to determine that the effect is faked.',
    },
    'alert' : {},
    'artificer initiate': {},
    'athlete': {},
    'bountiful luck': {},
    'invalid': {
        'featName': 'Invalid feat name',
        'featDescription': '',
        'abilityModified': [],
        'prerequsite': '',
        'source': '',
        'skillAdvantage': [],
        'skillAdvantageRequirement': '',
        'spellsLearned': [],
        'spellList': [],
        'spellcastingAbility': [],
        'featAbility': '',
    },
}

app.get('/', (request, response) => { 
    response.send(__dirname + '/index.html')
})

app.get('/api/:featName', (request, response) => {
    const featName = request.params.featName.toLowerCase()
    if(feats[featName]){
        response.json(feats[featName])
    }
    else {
        response.json(feats['invalid'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running!')
})