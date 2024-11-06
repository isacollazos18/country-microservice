import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'; 
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CountryService {
    private readonly apiUrl = 'https://restcountries.com/v3.1/name';

    constructor(private readonly httpService: HttpService) {}

    getCountryInfo(name: string): Observable<any> {
        const url = `${this.apiUrl}/${name}`;
        return this.httpService.get(url).pipe(
            map(response => {
                const countryData = response.data[0];
                return {
                    name: countryData.name.common,
                    capital: countryData.capital ? countryData.capital[0] : 'N/A',
                    population: countryData.population,
                    region: countryData.region,
                };
            })
        );
    }
}