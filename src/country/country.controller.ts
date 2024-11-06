import { Controller, Get, Query } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
    constructor(private readonly countryService: CountryService) {}
    
    @Get()
    getCountry(@Query('name') name: string){
        return this.countryService.getCountryInfo(name);
    }
}
