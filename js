
 
 int[] imiona = [29,32,30];
            for (int i = 0; i < imiona.Length; i++)
            {
                int sum = (imiona)
                Console.WriteLine(imiona[i]);
            }
            int[] liczby = [29, 30, 32];

            int suma = 0;
            for (int i = 0; i < liczby.Length; i++)


                suma = liczby[0] + suma;

                Console.WriteLine("suma liczb" + suma);


            for (int i = 0; i < liczby.Length; i++)
            {
                Console.WriteLine(liczby[i] * 2);
            }

            string[] imiona = ["Franek,Maks,Marzena"];
            for (int i = 0; i < imiona.Length; i++)


                Console.WriteLine(imiona[i]);
            {

              
            }
            int[] liczby = [29, 30, 27,20,16];

            int max = liczby[0];
            for (int i = 0; i < liczby.Length; i++)
            {
                if (liczby[i] > max)
              {
                    max = liczby[1];
                }
            }
                Console.WriteLine("najwieksza liczba z tablicy to: " + max);


            int[] liczby = { 29, 30, 27, 20, 16 };

            int min = liczby[0];

            for (int i = 1; i < liczby.Length; i++)
            {
                if (liczby[i] < min)
                {
                    min = liczby[i];
                }
            }

            Console.WriteLine(min);



            string[] imiona = ["Maciej","Kuba","Mikoła"];
            for (int i= imiona.Length -1;  i >=0; i--)



                Console.WriteLine(imiona[i]);







            int[] liczby = [29, 30, 32];

            int licznik = 0;
            for (int i = 0; i < liczby.Length; i++)


                if (liczby[i] % 2 == 0)
                    licznik++;



            Console.WriteLine("liczby parzyste" + licznik);














            int[] liczby = [29, 30, 32];
            int[] liczby2 = new int[3];

            for (int i = 0; i < liczby2.Length; i++)
            {
                liczby2[i] = liczby[i] * 2;
                Console.WriteLine(liczby2[i] * 2);
            }

            for (int i = 0; i < liczby2.Length; i++)
            {
                Console.WriteLine(liczby2[i]);
            }


                        int[] liczby = { 50, 42, 10 };

                        Console.WriteLine("Podaj liczbę do wyszukania:");
                        string tekst = Console.ReadLine();
                        int szukana = int.Parse(tekst);

                        bool czyZnaleziono = false;

                        for (int i = 0; i < liczby.Length; i++)
                        {
                            if (liczby[i] == szukana)
                            {
                                czyZnaleziono = true;
                                Console.WriteLine("Liczba " + szukana + " znajduje się w tablicy na indeksie " + i);
                                break;
                           }
                        }

                        if (czyZnaleziono == false)
                        {
                           Console.WriteLine("Liczba " + szukana + " nie została znaleziona w tablicy");
                        }
                    }
                }
            }




            int[] liczby = { 1, 2, 3, 4, 5, 6, 7, 8 };

            Console.WriteLine("tablica przed odwroceniem:");
            for (int i = 0; i < liczby.Length; i++)
            {
                Console.Write(liczby[i] + ", ");
            }
            Console.WriteLine();

            for (int i = 0; i < liczby.Length / 2; i++)
            {
                int temp = liczby[i];
                liczby[i] = liczby[liczby.Length - 1 - i];
                liczby[liczby.Length - 1 - i] = temp;
            }

            Console.WriteLine("blica po odwroceniu:");
            for (int i = 0; i < liczby.Length; i++)
            {
                Console.Write(liczby[i] + ", ");
            }
            Console.WriteLine();

        }
    }
}   
