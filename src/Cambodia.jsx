import { useState, useMemo } from 'react'
import './App.css'
import 'antd/dist/reset.css'
import { Card, Select } from 'antd'
import province from './data/province.json'
import district from './data/district.json'
import village from './data/village.json'
import commune from './data/commune.json'

const Cambodia = () => {
  // console.log(province)
  // console.log(district)
  // console.log(commune)
  // console.log(village)

  // const communeData = communue.map(obj => {
  //   return {
  //     name: obj.name,
  //     id: obj.id,
  //   }
  // })
  // console.log(communeData)

  const [selectedProvince, setSelectedProvince] = useState(null)
  const [selectedDistrict, setSelectedDistrict] = useState(null)
  const [selectedCommune, setSelectedCommune] = useState(null)
  const [selectedVillage, setSelectedVillage] = useState(null)

  const filteredDistricts = useMemo(() => {
    if (!selectedProvince) return []
    return district.filter(d => d.id.startsWith(selectedProvince))
  }, [selectedProvince])

  const filteredCommunes = useMemo(() => {
    if (!selectedDistrict) return []
    return commune.filter(c => c.id.startsWith(selectedDistrict))
  }, [selectedDistrict])

  const filteredVillages = useMemo(() => {
    if (!selectedCommune) return []
    return village.filter(v => v.id.startsWith(selectedCommune))
  }, [selectedCommune])

  const handleProvinceChange = value => {
    setSelectedProvince(value)
    setSelectedDistrict(null)
    setSelectedCommune(null)
    setSelectedVillage(null)
  }

  const handleDistrictChange = value => {
    setSelectedDistrict(value)
    setSelectedCommune(null)
    setSelectedVillage(null)
  }

  const handleCommuneChange = value => {
    setSelectedCommune(value)
    setSelectedVillage(null)
  }

  const handleVillageChange = value => {
    setSelectedVillage(value)
  }

  return (
    <Card className='width-selector'>
      <label className='Labelsss'>
        Province
        <Select
          className='width-select'
          onChange={handleProvinceChange}
          placeholder='Select a province'
          value={selectedProvince}
        >
          {province.map(province => (
            <Select.Option key={province.id} value={province.id}>
              {province.name.latin}
            </Select.Option>
          ))}
        </Select>
      </label>
      <label className='Labelsss'>
        District
        <Select
          className='width-select'
          onChange={handleDistrictChange}
          placeholder='Select a district'
          value={selectedDistrict}
          disabled={!selectedProvince}
        >
          {filteredDistricts.map(district => (
            <Select.Option key={district.id} value={district.id}>
              {district.name.latin}
            </Select.Option>
          ))}
        </Select>
      </label>
      <label className='Labelsss'>
        Commune
        <Select
          className='width-select'
          onChange={handleCommuneChange}
          placeholder='Select a commune'
          value={selectedCommune}
          disabled={!selectedDistrict}
        >
          {filteredCommunes.map(commune => (
            <Select.Option key={commune.id} value={commune.id}>
              {commune.name.latin}
            </Select.Option>
          ))}
        </Select>
      </label>
      <label className='Labelsss'>
        Village
        <Select
          className='width-select'
          onChange={handleVillageChange}
          placeholder='Select a village'
          value={selectedVillage}
          disabled={!selectedCommune}
        >
          {filteredVillages.map(village => (
            <Select.Option key={village.id} value={village.id}>
              {village.name.latin}
            </Select.Option>
          ))}
        </Select>
      </label>
    </Card>
  )
}

export default Cambodia
